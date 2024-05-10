declare module '*.mdx' {
  const value: React.ComponentType;
  export default value;
}

declare module '*.module.css' {
  const value: { [key: string]: string };
  export default value;
}
