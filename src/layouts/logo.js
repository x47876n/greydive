import '../assets/styles/greydive.css';

const Logo = () => {
  return (
    <img
      onClick={() => (window.location.href = '/greydive')}
      src="https://uploads-ssl.webflow.com/612fcc289671bc539ecd004e/63597a7833dba6e559436f89_LOGO-simulacr-blanco.dccda331476ff5c519dd.png"
      loading="lazy"
      width="170"
      sizes="(max-width: 479px) 154.6953125px, 170px"
      srcSet="https://uploads-ssl.webflow.com/612fcc289671bc539ecd004e/63597a7833dba6e559436f89_LOGO-simulacr-blanco.dccda331476ff5c519dd-p-500.png 500w, https://uploads-ssl.webflow.com/612fcc289671bc539ecd004e/63597a7833dba6e559436f89_LOGO-simulacr-blanco.dccda331476ff5c519dd-p-800.png 800w, https://uploads-ssl.webflow.com/612fcc289671bc539ecd004e/63597a7833dba6e559436f89_LOGO-simulacr-blanco.dccda331476ff5c519dd-p-1080.png 1080w, https://uploads-ssl.webflow.com/612fcc289671bc539ecd004e/63597a7833dba6e559436f89_LOGO-simulacr-blanco.dccda331476ff5c519dd.png 1377w"
      alt=""
      className="logomenu"
    ></img>
  );
};

export default Logo;
