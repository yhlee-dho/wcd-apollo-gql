import React, { FC } from "react";
import Link from "next/link";
import { Center, ContainerHeader, LogoHeader } from "../Style";

export const Header: FC = () => {
	return (
		<ContainerHeader>
			<Center>
				<LogoHeader className="header">
					<Link href="/">
						<a>Windy City Devs</a>
					</Link>
				</LogoHeader>
			</Center>
		</ContainerHeader>
	);
};

// export const ContainerHeader = styled.header`
//     position: fixed;
//     top: 0;
//     left: 0;
//     right: 0;

//     height: 50px;
//     padding: 7px 0 10px;

//     background-color: #ffffff;
//     box-shadow: 0 1px 1px rgba(0, 0, 0, 0,2);
// `;

// export const LogoHeader = styled.h1`
//     font-size: 4rem;
//     font-family: ${(p) => p.theme.fonts.accent};
//     padding-bottom: 15px;
//     margin-bottom: 20px;
//     display: flex;

//     a {
//         text-decoration: none;
//         color: #000000; 
//     }

//     a:hover {
//         color: ${(p) => p.theme.colors.pink};
//     }
// `;