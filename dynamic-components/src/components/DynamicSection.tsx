import { Box } from "@mui/material";
import { basketConfig } from "../basketConfig";

export default function DynamicSection({ configKey }: { configKey: string }) {
  const { components, name } = basketConfig[configKey];
  return (
    <Box component="section">
      {name}
      {components.map(({ component: Component, key }) => {
        return <Component key={key} />;
      })}
    </Box>
  );
}
