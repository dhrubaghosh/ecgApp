import { useState } from "react";
import { Button } from "antd";
import Navbar from "../components/Navbar";
import Donation from "../components/donation/Donation";
import Footer from "../components/Footer";
import Styles from "../styles/aboutus.module.css";
import { aboutusHeading, aboutusParagraph } from "../assets/data";

// You'll need to import these images - add them to your assets folder
import missionImg from '../assets/logo.jpg';
import visionImg from '../assets/logo.jpg';
import impactImg from '../assets/logo.jpg';
import seekExpeditionImg from '../assets/logo.jpg';

// Team member photos - add these to your assets folder
import saleemImg from '../assets/logo.jpg';
import stephenImg from '../assets/logo.jpg';
import saravananImg from '../assets/logo.jpg';
import shaimaImg from '../assets/logo.jpg';

// Advisor photos
import drAzeezImg from '../assets/logo.jpg';
import drVijayImg from '../assets/logo.jpg';
import drAnirudhaImg from '../assets/logo.jpg';

// Partner logos - add these to your assets folder
import partner1Logo from '../assets/logo.jpg';
import partner2Logo from '../assets/logo.jpg';
import partner3Logo from '../assets/logo.jpg';

const AboutUs: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showDonation = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = (data: boolean) => {
    setIsModalOpen(data);
  };

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <div className={Styles.hero_container}>
        <div className={Styles.headingCard}>
          <h1>{aboutusHeading}</h1>
          <p>{aboutusParagraph}</p>
          <div className={Styles.headingCard_button}>
            <Button className={Styles.headingCard_btn} onClick={showDonation}>
              <b>Donate Now</b>
            </Button>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <section className={Styles.about_section}>
        <div className={Styles.container}>
          <div className={Styles.about_content}>
            <div className={Styles.about_text}>
              <p>
                At Environment Conservation Group, conservation is not only our middle name—it is our heartbeat, 
                the very soul of everything we do. Rooted in the vibrant city of Coimbatore and active across India, 
                we are a passionate collective of environmentalists, educators, scientists, and volunteers dedicated 
                to protecting our planet's precious biodiversity and building a more sustainable future for all.
              </p>
              <p>
                Founded on the belief that awareness is the first step toward meaningful action, we engage communities, 
                inspire youth, and collaborate with institutions to address some of the most urgent environmental 
                challenges of our time. Whether it's saving endangered species, protecting fragile ecosystems, or 
                promoting sustainable living practices, our work is grounded in a deep respect for nature and a 
                commitment to science-based conservation.
              </p>
              <p>
                We believe that education is empowerment. Through interactive workshops, field visits, documentary 
                screenings, and school programs, we equip the next generation with the knowledge and tools they need 
                to become stewards of the environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className={Styles.mission_vision_section}>
        <div className={Styles.container}>
          <div className={Styles.section_header}>
            <h2>Mission & Vision</h2>
          </div>
          
          <div className={Styles.mission_vision_grid}>
            {/* Mission */}
            <div className={Styles.mission_card}>
              <div className={Styles.card_image}>
                <img src={missionImg} alt="Our Mission" />
              </div>
              <div className={Styles.card_content}>
                <h3>Mission Statement</h3>
                <p>
                  To inspire and empower individuals, especially the youth, to protect nature through education, 
                  community engagement, and conservation action.
                </p>
                <p>
                  We strive to bridge the gap between science, indigenous wisdom, and public participation by 
                  creating awareness about wildlife, climate change, and sustainable living. Through grassroots 
                  outreach, research, and field expeditions, we promote ecological balance and foster a generation 
                  of environmentally conscious citizens.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className={Styles.vision_card}>
              <div className={Styles.card_content}>
                <h3>Vision</h3>
                <p>
                  A future where communities live in harmony with nature, empowered by knowledge and united in 
                  action for a sustainable planet.
                </p>
                <p>
                  We envision an India where every individual, from tribal regions to urban centers, plays an 
                  active role in conserving biodiversity, mitigating climate change, and nurturing the Earth 
                  for generations to come.
                </p>
              </div>
              <div className={Styles.card_image}>
                <img src={visionImg} alt="Our Vision" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEEK Expeditions Section */}
      <section className={Styles.seek_section}>
        <div className={Styles.container}>
          <div className={Styles.seek_content}>
            <div className={Styles.seek_image}>
              <img src={seekExpeditionImg} alt="SEEK Expeditions" />
            </div>
            <div className={Styles.seek_text}>
              <h2>SEEK Expeditions</h2>
              <p>
                One of our flagship initiatives, <strong>SEEK Expeditions</strong> stands as a vibrant testament 
                to our mission in motion. This dynamic, countrywide journey unites scientists, conservationists, 
                storytellers, and local communities in a shared quest to uncover and document the real-time impact 
                of conservation efforts across India's richly diverse ecological landscapes.
              </p>
              <p>
                Blending cutting-edge science with the wisdom of indigenous traditions and the lived experiences 
                of people on the ground, SEEK crafts powerful, immersive narratives that do more than just 
                inform—they inspire action, ignite curiosity, and build a deeper connection to the natural world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className={Styles.impact_section}>
        <div className={Styles.container}>
          <div className={Styles.impact_content}>
            <div className={Styles.impact_text}>
              <h2>Our Impact</h2>
              <p>
                At Environment Conservation Group, our impact is measured not just in numbers, but in the lives 
                we touch and the ecosystems we help protect. Over the years, we have reached thousands of students 
                through our education programs, empowered local communities to lead conservation efforts, and 
                contributed critical data for wildlife protection and policy change.
              </p>
              <p>
                Our initiatives have led to reduced roadkill in key areas, revival of local water bodies, and 
                greater awareness of sustainable practices in schools and neighborhoods. Most importantly, we've 
                inspired a growing network of young leaders, volunteers, and citizens who are now champions of 
                change for a greener, more resilient planet.
              </p>
            </div>
            <div className={Styles.impact_image}>
              <img src={impactImg} alt="Our Impact" />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={Styles.team_section}>
        <div className={Styles.container}>
          <div className={Styles.section_header}>
            <h2>Our Team</h2>
            <p>Meet the dedicated professionals working to protect our environment</p>
          </div>
          
          <div className={Styles.team_grid}>
            <div className={Styles.team_member}>
              <div className={Styles.member_image}>
                <img src={saleemImg} alt="Saleem" />
              </div>
              <div className={Styles.member_info}>
                <h4>Saleem</h4>
                <p className={Styles.member_role}>Team Member</p>
              </div>
            </div>

            <div className={Styles.team_member}>
              <div className={Styles.member_image}>
                <img src={stephenImg} alt="Stephen" />
              </div>
              <div className={Styles.member_info}>
                <h4>Stephen</h4>
                <p className={Styles.member_role}>Team Member</p>
              </div>
            </div>

            <div className={Styles.team_member}>
              <div className={Styles.member_image}>
                <img src={saravananImg} alt="Saravanan" />
              </div>
              <div className={Styles.member_info}>
                <h4>Saravanan</h4>
                <p className={Styles.member_role}>Team Member</p>
              </div>
            </div>

            <div className={Styles.team_member}>
              <div className={Styles.member_image}>
                <img src={shaimaImg} alt="Shaima" />
              </div>
              <div className={Styles.member_info}>
                <h4>Shaima</h4>
                <p className={Styles.member_role}>Team Member</p>
              </div>
            </div>
          </div>

          {/* Advisors Section */}
          <div className={Styles.advisors_section}>
            <h3>Our Advisors</h3>
            <div className={Styles.advisors_grid}>
              <div className={Styles.advisor_member}>
                <div className={Styles.member_image}>
                  <img src={drAzeezImg} alt="Dr. P A Azeez" />
                </div>
                <div className={Styles.member_info}>
                  <h4>Dr. P A Azeez</h4>
                  <p className={Styles.member_role}>Advisor</p>
                </div>
              </div>

              <div className={Styles.advisor_member}>
                <div className={Styles.member_image}>
                  <img src={drVijayImg} alt="Dr. Vijay Kumar" />
                </div>
                <div className={Styles.member_info}>
                  <h4>Dr. Vijay Kumar</h4>
                  <p className={Styles.member_role}>Advisor</p>
                </div>
              </div>

              <div className={Styles.advisor_member}>
                <div className={Styles.member_image}>
                  <img src={drAnirudhaImg} alt="Dr. Anirudha" />
                </div>
                <div className={Styles.member_info}>
                  <h4>Dr. Anirudha</h4>
                  <p className={Styles.member_role}>Advisor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className={Styles.collaboration_section}>
        <div className={Styles.container}>
          <div className={Styles.section_header}>
            <h2>Collaboration for Conservation</h2>
            <p>
              At Environment Conservation Group (ECG), we believe that protecting the planet is a collective effort. 
              Our journey has been enriched by the support, knowledge, and contributions of our partners—ranging 
              from conservation organizations and scientific institutions to private enterprises and local communities.
            </p>
            <p>
              Each partnership helps amplify our impact, reach wider audiences, and combine expertise to tackle 
              the interconnected challenges of climate change, biodiversity loss, and environmental degradation.
            </p>
          </div>
          
          <div className={Styles.partners_grid}>
            <div className={Styles.partner_logo}>
              <img src={partner1Logo} alt="Partner 1" />
            </div>
            <div className={Styles.partner_logo}>
              <img src={partner2Logo} alt="Partner 2" />
            </div>
            <div className={Styles.partner_logo}>
              <img src={partner3Logo} alt="Partner 3" />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={Styles.cta_section}>
        <div className={Styles.container}>
          <div className={Styles.cta_content}>
            <h2>Join Our Movement</h2>
            <p>
              In a time of climate uncertainty and ecological crisis, our message is one of hope, action, and 
              collective responsibility. We invite every citizen—student, farmer, policymaker, or business 
              leader—to walk with us on this path. Because conservation is not a task for a few—it's a movement for all.
            </p>
            <p><strong>After all, environment is our first name, and conservation is our promise.</strong></p>
          </div>
        </div>
      </section>

      <Donation open={isModalOpen} close={handleCloseModal} />
      <Footer />
    </>
  );
};

export default AboutUs;
