



const Linkbutton = ({ to,children }) => {


    const handleClick = (e) => {
        e.preventDefault();


        const targetElement = document.getElementById(to);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return (
        <li>
            <a
                href={`#${to}`} 
                className="nav-link"
                onClick={handleClick}
            >
                {children}
            </a>
        </li>
    );
};

export default Linkbutton;