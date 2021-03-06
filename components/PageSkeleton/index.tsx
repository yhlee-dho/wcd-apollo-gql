import React, { FC, Fragment } from "react";
import { Skeleton } from "antd";

export const PageSkeleton: FC = () => {
	const skeletonParagraph = (
		<Skeleton
			active
			paragraph={{ rows: 4 }}
			className="page-skeleton"
		/>
	);

	return (
		<Fragment>
			{skeletonParagraph}
			{skeletonParagraph}
			{skeletonParagraph}
		</Fragment>
	);
};
