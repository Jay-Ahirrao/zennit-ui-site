import React from 'react';
import ChromaGrid from '../components/ChromaGrid';

const Testimonials = () => {
  const items = [
    {
      image: "https://media.gettyimages.com/id/1294434027/photo/next-level-here-i-come.jpg?s=612x612&w=0&k=20&c=S2_15FQm_1Xq6RbHN-cV1rSkH_Lxl9IvAIYnKk2Qijg=",
      title: "Mr. Ravi Kumar",
      subtitle: "CTO, TechCorp Solutions",
      feedback: "SecureFlash transformed our security infra. Their proactive approach and cutting-edge solutions have significantly reduced our vulnerabilities. Highly recommended!",
      handle: "@ravikumar",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
      url: ""
    },
    {
      image: "https://t3.ftcdn.net/jpg/01/81/37/82/240_F_181378266_IgsWpFPDlNJMWY2Nq8uqWJLnpVeLiWar.jpg",
      title: "Mr. Deepak  A",
      subtitle: "Security Director, Global Finance Inc.",
      feedback:" The team at SecureFlash is exceptional. Their expertise in threat detection and incident response has given us peace of mind. They are true partners in our cybersecurity journey.",
      handle: "@deepak-aggrawal",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)",
      url: ""
    },
    {
      image: "https://media.gettyimages.com/id/1061611506/photo/bring-confidence-to-everything-you-do.jpg?s=612x612&w=0&k=20&c=BYQrDliHSfrKcpI_BZ-xCJLOg-NgAV6-B3E2zub4cvg=",
      title: "Mrs. Anvika Shastri",
      subtitle: "IT Manager, Healthcare Plus",
      feedback:" SecureFlash's tailored solutions have fortified our defenses against cyber threats. Their team's responsiveness and dedication to our security needs are unparalleled.",
      handle: "@anvikashastri",
      borderColor: "#F59E0B",
      gradient: "linear-gradient(135deg, #F59E0B, #000)",
      url: ""
    }
  ];

  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: "'PP Pangaia', sans-serif" }}>
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Trusted by industry leaders, CEO's and CTO's for their organisations Security
          </p>
        </div>
        <div style={{ margin:"120px", height: '600px', position: 'relative' }}>
          <ChromaGrid
            items={items}
            radius={300}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;