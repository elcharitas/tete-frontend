import { FC } from "react";
import { useTitle } from "react-use";
import { Box, Container, styled } from "@mui/material";
import { LeftSidebar, RightSidebar } from "./sidebar";
import Header from "./header";
import Footer from "./footer";

const Wrapper = styled(Container)`
	margin-top: 100px;
	display: flex;
	justify-content: space-between;
`;

const MainLayout: FC<ILayout> = ({ title, children }) => {
	useTitle(title, { restoreOnUnmount: true });
	return (
		<>
			<Header />
			<Wrapper>
				<LeftSidebar />
				<Box>{children}</Box>
				<RightSidebar />
			</Wrapper>
			<Footer />
		</>
	);
};

export default MainLayout;
