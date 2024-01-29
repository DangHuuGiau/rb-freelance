import { Button } from "./ui/button";

const CustomButton = ({children, type}: {children: React.ReactNode, type: "primary" | "secondary"}) => {
  return ( <Button className={``}>
{children}
  </Button> );
}
 
export default CustomButton;