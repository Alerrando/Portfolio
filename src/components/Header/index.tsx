import logo from './image/favicon.ico';

export function Header() {
  return (
    <header className="w-full bg-princ flex justify-center">
      <div className="w-[92%] alinhamento justify-between py-2">
        <div className="w-[45px] h-[45px]">
          <img
            src={logo}
            alt="icone do site"
            className="w-full h-full"
          />
        </div>

        <nav>
            <ul className="alinhamento gap-3 text-white">
                <li>
                    <a href="#">Projetos</a>
                </li>
                <li>
                    <a href="#">Sobre</a>
                </li>
                <li>
                    <a href="#">Contato</a>
                </li>
                
            </ul>
        </nav>
      </div>
    </header>
  );
}
