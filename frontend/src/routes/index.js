import Catalog from '../pages/catalog';
import Authorization from '../pages/authorization';
import AccountSettings from '../pages/account_settings';
import Home from '../pages/home';
import Liked from '../pages/liked';
import Artist from '../pages/artist';
import CreateMyPublication from '../pages/create_publication';
import UpploadPublication from '../components/UpploadPublication';
import UpploadProduct from '../components/UpploadProduct';
import AnotherArtist from '../pages/another_artist';
import PublicationDetails from '../pages/publication_details';
import ProductDetails from '../pages/product_details';
import Cart from '../pages/cart';
import ShippingScreen from '../pages/shipping';
import PaymentScreen from '../pages/payment';
import PlaceOrderScreen from '../pages/placeorder';

export const routes = [
	{path: "/catalog", element: Catalog, exact: false},
	{path: "/settings", element: AccountSettings, exact: false},
	{path: "/authorization", element: Authorization, exact: false},
	{path: "/home", element: Home, exact: false},
	{path: "/liked", element: Liked, exact: false},
	{path: "/artist", element: Artist, exact: false},
	{path: "/uppload", element: CreateMyPublication, exact: false},
	{path: "/publications/:id/uppload", element: UpploadPublication},
	{path: "/product/:id/uppload", element: UpploadProduct},
	{path: "/artist/:id", element: AnotherArtist},
	{path: "/publication/:id", element: PublicationDetails},
	{path: "/product/:id", element: ProductDetails},
	{path: "/cart/:id?", element: Cart},
	{path: "/shipping", element: ShippingScreen},
	{path: "/payment", element: PaymentScreen},
	{path: "/placeorder", element: PlaceOrderScreen},

]
