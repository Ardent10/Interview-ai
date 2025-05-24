interface LogoProps {
  height: number;
  width: number;
}
export default function Logo({ height, width }: LogoProps) {
  return <img src="/logo.png" alt="logo" height={height} width={width} />;
}
