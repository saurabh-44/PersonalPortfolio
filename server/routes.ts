import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertMessageSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertMessageSchema.parse(req.body);
      const message = await storage.createMessage(validatedData);
      res.status(201).json({ 
        success: true, 
        message: "Message sent successfully" 
      });
    } catch (error) {
      console.error("Error sending message:", error);
      res.status(400).json({ 
        success: false, 
        message: "Failed to send message" 
      });
    }
  });

  // Resume download endpoint
  app.get("/resume.pdf", (req, res) => {
    // Since we can't store the actual PDF in the repository,
    // we'll redirect to Google Drive or another hosting service
    res.status(404).json({ 
      message: "Resume not found. This would typically serve the resume PDF file." 
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
