const SectionTag = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="text-center text-xs text-secondary capitalize font-medium">
      {children}
    </p>
  );
};

export default SectionTag;
