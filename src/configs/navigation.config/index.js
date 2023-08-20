import { 
    NAV_ITEM_TYPE_TITLE, 
    NAV_ITEM_TYPE_COLLAPSE, 
    NAV_ITEM_TYPE_ITEM 
} from 'constants/navigation.constant'



const navigationConfig = [ 
    {
        key: 'home',
		path: '/home',
		title: 'Home',
		translateKey: 'nav.home',
		icon: 'home',
		type: NAV_ITEM_TYPE_ITEM,
		authority: [],
        subMenu: []
    },
	{
        key: 'Project List',
		path: '/projects',
		title: 'Project',
		icon: 'home',
		type: NAV_ITEM_TYPE_ITEM,
		authority: [],
        subMenu: []
    },
	{
		key: 'Portfolio',
		path: '/porto',
		title: 'Portfolio',
		icon: 'user',
		type: NAV_ITEM_TYPE_ITEM,
		authority: [],
        subMenu: []


	}
]

export default navigationConfig