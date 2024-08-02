import { Link } from 'react-router-dom'
import { TSidebarItem } from './sidebar.data'
import mainLogo from '@/shared/assets/images/mainLogo.png'
import LogoutIcon from '@/shared/assets/icons/logout.svg'

function SidebarItem({
    route,
    icon,
    title
}: {
    route: string
    icon: string
    title: string
}) {
    return (
        <Link
            to={route}
            className={'flex items-center gap-x-[15px]'}>
            <img src={icon} />
            <h4 className={'text-base text-[#d9d9d9]'}>{title}</h4>
        </Link>
    )
}

export const Sidebar = ({ sidebarItems }: { sidebarItems: TSidebarItem[] }) => {
    return (
        <div
            className={
                'bg-purple h-[calc(100vh-40px)] rounded-3xl pt-[50px] w-fit flex-col flex justify-between px-10 pb-11'
            }>
            <div className={'flex flex-col gap-y-[53px]'}>
                <Link to={'/'}>
                    <img
                        src={mainLogo}
                        alt="Main logo"
                    />
                </Link>
                <div className={'flex flex-col justify-center gap-y-[30px]'}>
                    {sidebarItems.map(item => (
                        <SidebarItem
                            key={item.title}
                            title={item.title}
                            icon={item.icon}
                            route={item.route}
                        />
                    ))}
                </div>
            </div>
            <div className="flex items-center gap-x-[15px]">
                <img src={LogoutIcon} />
                <span style={{ color: 'white' }}>Logout</span>
            </div>
        </div>
    )
}
