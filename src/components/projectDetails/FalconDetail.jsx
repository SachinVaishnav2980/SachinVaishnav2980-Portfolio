import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import falconLogo from "/public/falcon-logo.png";

// Section animation wrapper
const FadeSection = ({ children, delay = 0 }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  );
};

export const FalconDetail = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
      setShowTop(scrollTop > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <section id="details" className="relative container py-16 text-left space-y-12">
      {/* 🌈 Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-primary z-50 shadow-[0_0_10px_rgba(139,92,246,0.8)]"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* 🦅 Header Section */}
      <FadeSection>
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <img
            src={falconLogo}
            alt="FALCON Logo"
            className="w-28 h-28 md:w-36 md:h-36 animate-float"
          />
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-glow text-primary mb-2">
              FALCON 🦅
            </h1>
            <p className="text-lg text-foreground opacity-80">
              <span className="font-semibold">F</span>all{" "}
              <span className="font-semibold">A</span>lert{" "}
              <span className="font-semibold">L</span>andslide{" "}
              <span className="font-semibold">C</span>ondition{" "}
              <span className="font-semibold">O</span>bservation{" "}
              <span className="font-semibold">N</span>etwork
            </p>
            <p className="mt-3 text-sm opacity-70 max-w-xl">
              A full-stack system for rockfall prediction, risk analysis, and
              route optimization using drone imagery and machine learning.
            </p>
          </div>
        </div>
      </FadeSection>

      {/* ⚙️ Architecture Overview */}
      <FadeSection delay={0.1}>
        <div className="gradient-border p-6">
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            ⚙️ System Architecture
          </h2>
          <ul className="list-disc list-inside space-y-2 text-sm opacity-80">
            <li>
              <span className="font-medium">Frontend (React + TypeScript):</span>{" "}
              Modular architecture with Tailwind glassmorphism UI and Axios API
              layer.
            </li>
            <li>
              <span className="font-medium">Backend (FastAPI + Python):</span>{" "}
              RESTful endpoints, multi-model ML pipelines, authentication.
            </li>
            <li>
              <span className="font-medium">ML Models:</span> Weather, Crack
              Segmentation, DEM Analysis for risk computation.
            </li>
          </ul>
        </div>
      </FadeSection>

      {/* 🏗️ Project Architecture */}
<FadeSection delay={0.15}>
  <div className="gradient-border p-6">
    <h2 className="text-2xl font-semibold mb-4 text-primary">🏗️ Project Architecture</h2>
    <pre className="bg-card rounded-md p-4 text-sm overflow-x-auto opacity-80 leading-relaxed">
{`FALCON/
├── frontend/                           # React + TypeScript Frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── PredictionWorkflow/
│   │   │   │   ├── DataInjection.tsx   # File upload & data input
│   │   │   │   ├── ModelPredicting.tsx # ML model execution
│   │   │   │   └── RockfallForecast.tsx # Results visualization
│   │   │   ├── AuthModal.tsx           # Authentication system
│   │   │   ├── Dashboard.tsx           # Main control center
│   │   │   ├── InteractiveMapNew.tsx   # Map visualization
│   │   │   ├── Navigation.tsx          # Top navigation bar
│   │   │   ├── OptimizedRoute.tsx      # Route planning
│   │   │   ├── RiskAnalysisPanel.tsx   # Risk assessment display
│   │   │   ├── LeftSidebar.js          # Dashboard sidebar
│   │   │   ├── RightSidebar.js         # Dashboard controls
│   │   │   └── SimpleMap.tsx           # Basic map component
│   │   ├── services/
│   │   │   └── api.ts                  # API service layer
│   │   ├── lib/
│   │   │   ├── completeAuth.ts         # Authentication logic
│   │   │   └── firebaseConfig.ts       # Firebase configuration
│   │   ├── App.tsx                     # Main application component
│   │   ├── main.tsx                    # Entry point
│   │   └── index.css                   # Global styles
│   ├── public/
│   │   ├── falcon-logo.png             # Application logo
│   │   └── index.html                  # HTML template
│   ├── vite.config.ts                  # Build configuration
│   └── tailwind.config.js              # Tailwind configuration
├── backend/                            # FastAPI Python Backend
│   ├── main.py                         # FastAPI endpoints
│   ├── models/                         # ML models
│   │   ├── weather_pipeline.pkl
│   │   ├── crack_segmentation.h5
│   │   └── DEM.pkl
│   ├── weather_processor.py            # Weather analysis
│   ├── crack_segmentation.py           # Crack detection
│   ├── dem_processor.py                # DEM analysis
│   ├── requirements.txt                # Python dependencies
│   └── .env                            # Environment variables
└── README.md                           # Documentation`}
    </pre>
  </div>
</FadeSection>


      {/* 🚀 Features */}
      <FadeSection delay={0.2}>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="gradient-border p-6 card-hover">
            <h3 className="text-xl font-semibold mb-3 text-primary">Frontend 🚀</h3>
            <ul className="list-disc list-inside space-y-1 text-sm opacity-80">
              <li>Interactive dashboard with real-time monitoring</li>
              <li>Glassmorphism authentication & smooth routing</li>
              <li>Risk analysis and severity visualization</li>
              <li>Prediction workflow with data upload & results</li>
            </ul>
          </div>

          <div className="gradient-border p-6 card-hover">
            <h3 className="text-xl font-semibold mb-3 text-primary">Backend 🔧</h3>
            <ul className="list-disc list-inside space-y-1 text-sm opacity-80">
              <li>FastAPI RESTful services with OpenAPI docs</li>
              <li>Multi-model ML risk assessment</li>
              <li>File upload for drone & DEM data</li>
              <li>JWT authentication and CORS integration</li>
            </ul>
          </div>
        </div>
      </FadeSection>

      {/* 🧠 Tech Stack */}
      <FadeSection delay={0.3}>
        <div className="gradient-border p-6">
          <h2 className="text-2xl font-semibold mb-4 text-primary">🧠 Tech Stack</h2>
          <p className="text-sm opacity-80 leading-relaxed">
            <span className="font-medium">Frontend:</span> React 18, TypeScript, Vite, TailwindCSS <br />
            <span className="font-medium">Backend:</span> FastAPI, Python 3.8+, ML Pipelines <br />
            <span className="font-medium">Models:</span> Weather, Crack Segmentation, DEM Analysis
          </p>
        </div>
      </FadeSection>

      {/* 💻 Commands */}
      <FadeSection delay={0.4}>
        <div className="gradient-border p-6">
          <h2 className="text-2xl font-semibold mb-4 text-primary">💻 Commands</h2>
          <pre className="bg-card rounded-md p-4 text-sm overflow-x-auto opacity-80">
{`npm run dev              # Start both servers
npm run dev:frontend     # Frontend only
npm run dev:backend      # Backend only
npm run build            # Build for production
npm run install:all      # Install all dependencies`}
          </pre>
        </div>
      </FadeSection>

      {/* 🔗 API Endpoints */}
      <FadeSection delay={0.5}>
        <div className="gradient-border p-6">
          <h2 className="text-2xl font-semibold mb-4 text-primary">🔗 Key API Endpoints</h2>
          <ul className="list-disc list-inside text-sm opacity-80 space-y-1">
            <li><code>POST /api/comprehensive-analysis</code> – Multi-model risk analysis</li>
            <li><code>POST /api/auth/login</code> – User authentication</li>
            <li><code>GET /api/monitoring/live-data</code> – Real-time monitoring</li>
          </ul>
        </div>
      </FadeSection>

      {/* 🚀 Deployment */}
      <FadeSection delay={0.6}>
        <div className="gradient-border p-6">
          <h2 className="text-2xl font-semibold mb-4 text-primary">🚀 Deployment</h2>
          <pre className="bg-card rounded-md p-4 text-sm opacity-80 overflow-x-auto">
{`Frontend:
cd frontend ; npm run dev

Backend:
cd backend ; pip install -r requirements.txt
uvicorn main:app --host 0.0.0.0 --port 8000 --reload`}
          </pre>
        </div>
      </FadeSection>

      {/* 🧾 Footer */}
      <FadeSection delay={0.7}>
        <div className="text-center mt-12">
          <p className="text-sm opacity-70">
            <span className="font-semibold">MIT License</span> © FALCON Command Center — Advanced geospatial analysis for safer navigation 🦅
          </p>
          <a
            href="https://github.com/lakshya1410/FALCON"
            target="_blank"
            rel="noopener noreferrer"
            className="cosmic-button mt-4 inline-block"
          >
            View on GitHub
          </a>
        </div>
      </FadeSection>
    </section>
  );
};

// export default FalconDetail;
