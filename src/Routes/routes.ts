import { Application, Request, Response } from "express";
import { Contract } from "ethers";

export default (app: Application, contract: Contract) => {
  app.get("/data", async (_req: Request, res: Response) => {
    try {
      const data = await contract.getData();
      res.json({ data });
    } catch (error: unknown) {
      // Type assertion to `Error` to access the `message` property
      const errorMessage = (error instanceof Error) ? error.message : "An unknown error occurred";
      res.status(500).json({ error: errorMessage });
    }
  });

  app.post("/data", async (req: Request, res: Response) => {
    const { data } = req.body;
    try {
      const tx = await contract.setData(data);
      await tx.wait();
      res.json({ message: "Data set successfully!" });
    } catch (error: unknown) {
      // Type assertion for safe access to `error.message`
      const errorMessage = (error instanceof Error) ? error.message : "An unknown error occurred";
      res.status(500).json({ error: errorMessage });
    }
  });
};
