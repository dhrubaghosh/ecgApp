import React, { useState, useEffect } from 'react';
import { Tabs, Spin, Alert, Card, Row, Col, Typography } from 'antd';
import styles from '../styles/media.module.css';
import { imageData, videoData } from '../assets/data';

const { TabPane } = Tabs;
const { Title} = Typography;

interface ImageItem {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
}

interface VideoItem {
  id: number;
  title: string;
  content: string;
  videoUrl: string;
  thumbnailUrl: string;
}

const MediaGallery: React.FC = () => {
  const [images, setImages] = useState<ImageItem[]>([]);
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [loadingImages, setLoadingImages] = useState(true);
  const [loadingVideos, setLoadingVideos] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  // Fetch images from backend
  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoadingImages(true);
        
        // Simulate API call with timeout
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // This would be replaced with actual API call
        // const response = await axios.get('/api/images');
        // setImages(response.data);
        
        // Dummy data for now
        setImages(imageData);
      } catch (err) {
        console.error('Error fetching images:', err);
        setError('Failed to load images. Please try again later.');
      } finally {
        setLoadingImages(false);
      }
    };

    fetchImages();
  }, []);

  // Fetch videos from backend
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoadingVideos(true);
        
        // Simulate API call with timeout
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // This would be replaced with actual API call
        // const response = await axios.get('/api/videos');
        // setVideos(response.data);
        
        // Dummy data for now
        setVideos(videoData);
      } catch (err) {
        console.error('Error fetching videos:', err);
        setError('Failed to load videos. Please try again later.');
      } finally {
        setLoadingVideos(false);
      }
    };

    fetchVideos();
  }, []);

  const handleVideoClick = (videoUrl: string) => {
    setActiveVideo(videoUrl);
  };

  const handleCloseVideo = () => {
    setActiveVideo(null);
  };

  return (
    <div className={styles.galleryContainer}>
      <Tabs defaultActiveKey="images" centered>
        <TabPane tab="Images" key="images">
          {loadingImages ? (
            <div className={styles.loadingContainer}>
              <Spin size="large" />
            </div>
          ) : error ? (
            <Alert message={error} type="error" />
          ) : (
            <div>              
              <Row gutter={[24, 24]}>
                {images.map(image => (
                  <Col xs={24} sm={12} md={8} lg={6} key={image.id}>
                    <Card 
                      hoverable
                      className={styles.mediaCard}
                      cover={
                        <img 
                          alt={image.title} 
                          src={image.imageUrl} 
                          className={styles.cardImage}
                        />
                      }
                    >
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          )}
        </TabPane>
        
        <TabPane tab="Videos" key="videos">
          {loadingVideos ? (
            <div className={styles.loadingContainer}>
              <Spin size="large" />
            </div>
          ) : error ? (
            <Alert message={error} type="error" />
          ) : (
            <div>
              <Title level={2} className={styles.sectionTitle}>Video Collection</Title>
              
              <Row gutter={[24, 24]}>
                {videos.map(video => (
                  <Col xs={24} sm={12} md={8} lg={6} key={video.id}>
                    <Card 
                      hoverable
                      className={styles.mediaCard}
                      onClick={() => handleVideoClick(video.videoUrl)}
                      cover={
                        <div className={styles.thumbnailContainer}>
                          <img 
                            alt={video.title} 
                            src={video.thumbnailUrl} 
                            className={styles.cardImage}
                          />
                          <div className={styles.playOverlay}>
                            <div className={styles.playButton}>▶</div>
                          </div>
                        </div>
                      }
                    >
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          )}
        </TabPane>
      </Tabs>
      
      {activeVideo && (
        <div className={styles.videoModal} onClick={handleCloseVideo}>
          <div className={styles.videoWrapper} onClick={e => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={handleCloseVideo}>×</button>
            <video 
              src={activeVideo} 
              controls 
              autoPlay 
              className={styles.videoPlayer}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaGallery;