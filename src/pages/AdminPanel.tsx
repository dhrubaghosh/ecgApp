import React, { useEffect, useState } from 'react';
import { Tabs, Table, Input, Button, message, Image } from 'antd';
import { UploadOutlined, SaveOutlined } from '@ant-design/icons';
import Styles from '../styles/adminpanel.module.css';

type ImageItem = {
  Id: number;
  Title: string;
  Content: string;
  ImageUrl: string;
  Category: string;
};

type WordingItem = {
  KeyName: string;
  Value: string;
};

const AdminPanel: React.FC = () => {
  const [images, setImages] = useState<ImageItem[]>([]);
  const [wordings, setWordings] = useState<WordingItem[]>([]);
  const [loadingImages, setLoadingImages] = useState(false);
  const [loadingWordings, setLoadingWordings] = useState(false);

  const [editedWordings, setEditedWordings] = useState<Record<string, string>>({});
  const [editedTitles, setEditedTitles] = useState<Record<number, string>>({});
  const [selectedFiles, setSelectedFiles] = useState<Record<number, File | null>>({});

  useEffect(() => {
    fetchImages();
    fetchWordings();
  }, []);

  const fetchImages = async () => {
    setLoadingImages(true);
    try {
      const res = await fetch('/api/images');
      const data = await res.json();
      setImages(data);
      const titles: Record<number, string> = {};
      const files: Record<number, File | null> = {};
      data.forEach((item: ImageItem) => {
        titles[item.Id] = item.Title;
        files[item.Id] = null;
      });
      setEditedTitles(titles);
      setSelectedFiles(files);
    } catch (err) {
      message.error('Error loading images');
    } finally {
      setLoadingImages(false);
    }
  };

  const fetchWordings = async () => {
    setLoadingWordings(true);
    try {
      const res = await fetch('/api/wordings');
      const data = await res.json();
      setWordings(data);

      const editMap: Record<string, string> = {};
      data.forEach((item: WordingItem) => {
        editMap[item.KeyName] = item.Value;
      });
      setEditedWordings(editMap);
    } catch (err) {
      message.error('Error loading wordings');
    } finally {
      setLoadingWordings(false);
    }
  };
  const handleWordingChange = (key: string, value: string) => {
    setEditedWordings(prev => ({ ...prev, [key]: value }));
  };

  const saveWording = async (key: string) => {
    try {
      await fetch(`/api/wordings/${encodeURIComponent(key)}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ value: editedWordings[key] }),
      });
      message.success('Wording updated');
      fetchWordings();
    } catch (err) {
      message.error('Error saving wording');
    }
  };
  const handleTitleChange = (id: number, value: string) => {
    setEditedTitles(prev => ({ ...prev, [id]: value }));
  };

  const saveImageTitle = async (id: number) => {
    try {
      await fetch(`/api/images/${id}/title`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: editedTitles[id] }),
      });
      message.success('Title updated');
      fetchImages();
    } catch (err) {
      message.error('Error saving title');
    }
  };

  const handleFileSelect = (id: number, file: File | null) => {
    setSelectedFiles(prev => ({ ...prev, [id]: file }));
  };

  const saveReplaceImage = async (id: number) => {
    if (!selectedFiles[id]) {
      message.warning('Please select an image file first.');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedFiles[id]!);

    try {
      await fetch(`/api/images/${id}`, {
        method: 'POST',
        body: formData,
      });
      message.success('Image replaced successfully');
      fetchImages();
    } catch (err) {
      message.error('Error replacing image');
    }
  };
  const imageColumns = [
    {
      title: 'Preview',
      dataIndex: 'ImageUrl',
      key: 'ImageUrl',
      render: (url: string) => (
        <Image
          className={Styles.imagePreview}
          width={100}
          height={80}
          src={url}
          alt="preview"
        />
      )
    },
    {
      title: 'Title',
      dataIndex: 'Title',
      key: 'Title',
      render: (_: any, record: ImageItem) => (
        <div className={Styles.titleEdit}>
          <Input
            value={editedTitles[record.Id]}
            onChange={(e) => handleTitleChange(record.Id, e.target.value)}
            placeholder="Edit Title"
            size="small"
          />
          <Button
            className={Styles.saveButton}
            icon={<SaveOutlined />}
            size="small"
            onClick={() => saveImageTitle(record.Id)}
          >
            Save
          </Button>
        </div>
      )
    },
    {
      title: 'Category',
      dataIndex: 'Category',
      key: 'Category',
    },
    {
      title: 'Replace Image',
      key: 'action',
      render: (_: any, record: ImageItem) => (
        <div className={Styles.replaceSection}>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFileSelect(record.Id, e.target.files?.[0] || null)}
          />
          <Button
            className={Styles.uploadButton}
            icon={<UploadOutlined />}
            size="small"
            onClick={() => saveReplaceImage(record.Id)}
          >
            Replace
          </Button>
        </div>
      )
    },
  ];

  const wordingColumns = [
    {
      title: 'Key',
      dataIndex: 'KeyName',
      key: 'KeyName',
    },
    {
      title: 'Value',
      key: 'Value',
      render: (_: any, record: WordingItem) => (
        <Input.TextArea
          value={editedWordings[record.KeyName]}
          onChange={(e) => handleWordingChange(record.KeyName, e.target.value)}
          autoSize
        />
      )
    },
    {
      title: 'Action',
      key: 'action',
      render: (_: any, record: WordingItem) => (
        <Button
          icon={<SaveOutlined />}
          className={Styles.saveButton}
          onClick={() => saveWording(record.KeyName)}
        >
          Save
        </Button>
      )
    },
  ];

  return (
    <div className={Styles.adminpanel}>
      <h1 className={Styles.adminTitle}>Admin Panel</h1>
      <div className={Styles.tabsContainer}>
        <Tabs defaultActiveKey="1" className={Styles.centerTabs}>
          <Tabs.TabPane tab="Images" key="1">
            <div className={Styles.tableWrapper}>
              <Table
                columns={imageColumns}
                dataSource={images}
                loading={loadingImages}
                rowKey="Id"
                pagination={{ pageSize: 5 }}
              />
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Wordings" key="2">
            <div className={Styles.tableWrapper}>
              <Table
                columns={wordingColumns}
                dataSource={wordings}
                loading={loadingWordings}
                rowKey="KeyName"
                pagination={{ pageSize: 10 }}
              />
            </div>
          </Tabs.TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPanel;
