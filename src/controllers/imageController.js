const { GoogleGenAI, Modality } = require("@google/genai");

const generateImageFromText = async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) {
      return res.status(400).json({
        success: false,
        error: "Prompt is required in the request body",
      });
    }

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash-preview-image-generation",
      contents: `Generate a funny football troll image: ${prompt}`,
      config: {
        responseModalities: [Modality.TEXT, Modality.IMAGE],
      },
    });

    const imagePart = response.candidates[0].content.parts.find(
      (part) => part.inlineData
    );

    if (!imagePart) {
      return res.status(500).json({
        success: false,
        error: "No image data was generated",
      });
    }

    const imageBase64 = `data:image/png;base64,${imagePart.inlineData.data}`;

    res.json({
      success: true,
      imageUrl: imageBase64,
      text: response.candidates[0].content.parts[0]?.text || prompt,
    });
  } catch (error) {
    console.error("Full error:", error);
    res.status(500).json({
      success: false,
      error: error.message || "Image generation failed",
    });
  }
};

// const generateImageFromText = async (req, res) => {
//   try {
//     const { prompt } = req.body;
//     const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

//     // Generate 4 variants
//     const variants = await Promise.all(
//       [1, 2, 3, 4].map(async () => {
//         const response = await ai.models.generateContent({
//           model: "gemini-1.5-flash",
//           contents: [
//             {
//               role: "user",
//               parts: [{ text: `${prompt} (generate a unique variant)` }],
//             },
//           ],
//         });
//         return response.response.candidates[0].content.parts.find(
//           (p) => p.inlineData
//         );
//       })
//     );

//     res.json({
//       images: variants.map((v) => ({
//         url: `data:image/png;base64,${v.inlineData.data}`,
//         id: Math.random().toString(36).slice(2),
//       })),
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Generation failed" });
//   }
// };

module.exports = { generateImageFromText };
