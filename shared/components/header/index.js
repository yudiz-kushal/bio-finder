import Link from "next/link";

import allRoutes from "@shared/utils/allRoutes";
import BfLink from "../bfLink";

function Header() {
	return (
		<header className="header py-2 p-lg-3">
			<div className="container d-flex align-items-center justify-content-between">
				<div>
					<Link prefetch={false} href="/" title="BioFinder" className="logo">
						BioFinder
					</Link>
				</div>
				<div>
					<ul className="header-menu d-flex m-0">
						<BfLink href={`/bio${allRoutes.tinder}`}>Tinder</BfLink>
						<BfLink href={`/bio${allRoutes.bumble}`}>Bumble</BfLink>
					</ul>
				</div>
			</div>
		</header>
	)
}
export default Header