export const isValueValid = (value: string): boolean => {
  const num = Number(value);
  return (
    /^\d*$/.test(value) &&
    value.length > 0 &&
    value.length <= 4 &&
    Number.isInteger(num) &&
    num >= 1 &&
    num <= 9999
  );
};

export const downloadSVG = ({
  svg,
  filename,
}: {
  svg: SVGSVGElement;
  filename: string;
}) => {
  const svgData = svg.outerHTML;

  const blob = new Blob([svgData], {
    type: "image/svg+xml;charset=utf-8",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = `${filename}.svg`;
  link.click();

  URL.revokeObjectURL(url);
};
