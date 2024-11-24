# SeasonOfYou - Your Personal Color Analysis & Style Guide 🎨

SeasonOfYou is an innovative web application that helps women discover their seasonal color palette and get personalized outfit recommendations that enhance their natural beauty.

![SeasonOfYou Preview](https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070)

## ✨ Features

- **Color Analysis** 
  - Upload a selfie for instant color analysis
  - Discover your seasonal color type
  - Get detailed insights about your perfect color palette

- **Smart Outfit Recommendations**
  - Personalized outfit suggestions based on your color season
  - Curated combinations for different occasions
  - Mix and match recommendations that complement your colors

- **Style Guidance**
  - Season-specific style tips
  - Color combination suggestions
  - Accessory recommendations

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v8 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/hanzili/season-of-you.git
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your Clerk authentication keys:
```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key
VITE_DEV_AUTH_BYPASS=false
```

4. Start the development server:
```bash
npm run dev
```

## 🛠️ Built With

- **Frontend Framework**: React + TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: Clerk
- **Color Analysis**: OpenCV.js
- **Animation**: Framer Motion
- **State Management**: React Hooks
- **Routing**: React Router
- **Build Tool**: Vite

## 📱 Core Features Breakdown

### 1. Color Analysis
- AI-powered color analysis using OpenCV.js
- Determines your seasonal color type (Spring, Summer, Autumn, Winter)
- Provides detailed color recommendations

### 2. Outfit Generation
- Smart outfit combinations based on your color season
- Occasion-based recommendations
- Style preference customization

### 3. Style Profile
- Personal style preferences storage
- Season-specific recommendations
- Style history tracking

## 🎨 Color Seasons

- **Spring**: Warm and bright colors
- **Summer**: Cool and soft colors
- **Autumn**: Warm and deep colors
- **Winter**: Cool and clear colors

## 🔒 Authentication

This project uses Clerk for authentication. To set up authentication:

1. Create a Clerk account
2. Get your publishable key
3. Add it to your `.env` file

## 📦 Project Structure

```
src/
├── components/         # Reusable UI components
├── pages/             # Page components
├── utils/             # Utility functions
├── config/            # Configuration files
└── assets/            # Static assets
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Color analysis algorithms inspired by seasonal color theory
- UI design inspired by modern fashion applications
- Special thanks to the open-source community
