import Header from "./header/component";

type TProps = {
  children: React.ReactNode;
}

const MainContent: React.FC<TProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default MainContent;