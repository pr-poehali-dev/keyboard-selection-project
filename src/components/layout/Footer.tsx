
const Footer = () => {
  return (
    <footer className="bg-white shadow-sm mt-10">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © 2025 KeyboardFinder — сервис подбора клавиатур
            </p>
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              О проекте
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Контакты
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Помощь
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
