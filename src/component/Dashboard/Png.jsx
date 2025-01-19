import {Progress} from "@heroui/react";

  function Png() {
  return (
    <Progress
      classNames={{
        base: "max-w-md",
        track: "drop-shadow-md border border-default",
        indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
        label: "tracking-wider font-medium text-default-600",
        value: "text-foreground/60",
      }}
      label="Auto-layout.pdf"
      radius="sm"
      showValueLabel={true}
      size="sm"
      value={60}
    />
  );
}
export default Png
