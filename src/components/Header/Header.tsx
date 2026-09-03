import { QrCode, UserRound } from 'lucide-react'

function Header() {
    return(
        <header className='bg-[#f7eddd]'>
            <nav className='mx-auto flex h-24 max-w-[1160px] items-center justify-between px-6 font-flame font-bold'>
                <a href="/" aria-label="버거킹 홈">
                    BURGER KING
                </a>

                <div className='flex items-center gap-8 font-flame'>
                    <a href="/menu">MENU</a>
                    <a href="/story">STORY</a>
                    <a href="/news">NEWS</a>
                    <a href="/store">STORE</a>
                    <a href="customer">CUSTOMER</a>
                    <a href="/franchise">가맹창업·임대문의</a>
                </div>

                <div className='flex items-center gap-5'>
                    <button 
                    type="button" 
                    aria-label="QR 메뉴 열기"
                    className='flex h-12 w-12 items-center justify-center rounded-2xl bg-[#542815] text-white'
                    >
                        <QrCode size={27} strokeWidth={2.5} />
                    </button>

                    <a 
                    href="/recruit"
                    className='flex items-center gap-2 rounded-full bg-[#542815] px-6 py-3 font-bold text-white'
                    >
                        <UserRound size={18} />
                        채용사이트
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Header