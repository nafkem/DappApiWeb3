
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const NebulaXModule = buildModule("NebulaXModule", (m: any) => {
 
  // Deploy 
  //const nebXToken = m.contract("NebXToken");
  //const verifier = m.contract("Verifier");
  const nebulaX = m.contract("NebulaX");

  return { nebulaX };
});

export default NebulaXModule;