import Link from "next/link";

import allRoutes from "@shared/utils/allRoutes";

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
						<li><Link prefetch={false} href={allRoutes.tinder} title="Tinder" >Tinder</Link></li>
						<li><Link prefetch={false} href={allRoutes.bumble} title="Bumble" >Bumble</Link></li>
					</ul>
				</div>
			</div>
		</header>
	)
}
export default Header