import { cn } from "@/lib/utils";

const Wrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("px-6 md:px-14 lg:px-28", className)}>{children}</div>
  );
};

export default Wrapper;
