import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('privileges');

  const donatPacks = [
    { id: 1, amount: 100, price: 100, bonus: 0 },
    { id: 2, amount: 500, price: 500, bonus: 25 },
    { id: 3, amount: 1000, price: 1000, bonus: 100 },
    { id: 4, amount: 2500, price: 2500, bonus: 300 },
    { id: 5, amount: 5000, price: 5000, bonus: 750 },
    { id: 6, amount: 10000, price: 10000, bonus: 2000 }
  ];

  const privileges = [
    {
      id: 1,
      name: 'Крестьянин',
      price: 99,
      features: ['Цветной ник', 'Базовые команды', 'Кит Крестьянина'],
      popular: false,
      icon: 'Hammer'
    },
    {
      id: 2,
      name: 'Оруженосец',
      price: 199,
      features: ['Все возможности Крестьянина', 'Приоритетный вход', 'Дополнительные команды', 'Кит Оруженосца'],
      popular: false,
      icon: 'Crown'
    },
    {
      id: 3,
      name: 'Рыцарь',
      price: 499,
      features: ['Все возможности Оруженосца', 'Креативный режим', 'Приватные территории', 'Кит Рыцаря'],
      popular: true,
      icon: 'Diamond'
    },
    {
      id: 4,
      name: 'Барон',
      price: 799,
      features: ['Все возможности Рыцаря', 'Флай в лобби', 'Телепорт к игрокам', 'Кит Барона'],
      popular: false,
      icon: 'Shield'
    },
    {
      id: 5,
      name: 'Граф',
      price: 1299,
      features: ['Все возможности Барона', 'God режим', 'Личный warp', 'Невидимость', 'Кит Графа'],
      popular: false,
      icon: 'Sword'
    },
    {
      id: 6,
      name: 'Герцог',
      price: 1999,
      features: ['Все возможности Графа', 'Изменение времени', 'Управление погодой', 'Кит Герцога'],
      popular: false,
      icon: 'Star'
    },
    {
      id: 7,
      name: 'Король',
      price: 2999,
      features: ['Все возможности Герцога', 'Полный доступ к командам', 'Особый префикс', 'Королевский кит'],
      popular: false,
      icon: 'Trophy'
    }
  ];

  const rules = [
    'Запрещено использование читов и модификаций',
    'Уважайте других игроков',
    'Не спамьте в чате',
    'Запрещен гриф чужих построек',
    'Следуйте указаниям администрации'
  ];

  const faq = [
    {
      question: 'Как получить привилегии после оплаты?',
      answer: 'Привилегии выдаются автоматически в течение 5 минут после подтверждения платежа.'
    },
    {
      question: 'Можно ли вернуть деньги?',
      answer: 'Возврат средств возможен в течение 14 дней при технических проблемах с нашей стороны.'
    },
    {
      question: 'Как связаться с поддержкой?',
      answer: 'Вы можете написать нам в Discord или через форму обратной связи на сайте.'
    }
  ];

  const handlePurchase = (privilegeName: string, price: number) => {
    alert(`Покупка привилегии ${privilegeName} за ${price}₽ - функция в разработке`);
  };

  const handleDonatPurchase = (amount: number, price: number) => {
    alert(`Покупка ${amount} донат валюты за ${price}₽ - функция в разработке`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-sm border-b border-primary/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Zap" size={24} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white">MineCraft Донат</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              {[
                { id: 'privileges', label: 'Привилегии', icon: 'Crown' },
                { id: 'donat', label: 'Донат валюта', icon: 'Coins' },
                { id: 'rules', label: 'Правила', icon: 'Shield' },
                { id: 'support', label: 'Поддержка', icon: 'MessageCircle' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                    activeSection === item.id
                      ? 'bg-primary text-white'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon name={item.icon as any} size={18} />
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <img 
              src="/img/091f764a-69e9-46c8-b4eb-9d1bebf3f8b0.jpg" 
              alt="Minecraft Server" 
              className="w-full max-w-2xl mx-auto rounded-xl shadow-2xl"
            />
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            Получи <span className="text-primary">привилегии</span> за секунды
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Автоматическая выдача привилегий после оплаты. Начни играть с преимуществами прямо сейчас!
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg"
            onClick={() => setActiveSection('privileges')}
          >
            <Icon name="ShoppingCart" size={20} className="mr-2" />
            Купить привилегию
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Donat Currency Section */}
        {activeSection === 'donat' && (
          <section className="animate-fade-in">
            <h3 className="text-3xl font-bold text-white mb-4 text-center">Донат валюта</h3>
            <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto">
              1 рубль = 1 донат валюта. Используй донат валюту для покупок в игре!
            </p>
            <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6">
              {donatPacks.map((pack) => (
                <Card key={pack.id} className="bg-gray-800/50 border-gray-700 hover:border-primary/50 transition-all hover:scale-105">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Coins" size={32} className="text-yellow-500" />
                    </div>
                    <CardTitle className="text-xl text-white">
                      {pack.amount.toLocaleString()} донат валюты
                    </CardTitle>
                    {pack.bonus > 0 && (
                      <Badge className="bg-green-600 text-white mt-2">
                        +{pack.bonus} бонус!
                      </Badge>
                    )}
                    <CardDescription className="text-2xl font-bold text-primary mt-2">
                      {pack.price}₽
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center mb-4">
                      <p className="text-gray-300 text-sm">
                        Получите: <span className="text-yellow-500 font-bold">
                          {(pack.amount + pack.bonus).toLocaleString()}
                        </span> донат валюты
                      </p>
                    </div>
                    <Button 
                      className="w-full bg-yellow-600 hover:bg-yellow-700 text-white"
                      onClick={() => handleDonatPurchase(pack.amount + pack.bonus, pack.price)}
                    >
                      Купить за {pack.price}₽
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-12 text-center">
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 max-w-2xl mx-auto">
                <h4 className="text-xl font-bold text-white mb-3 flex items-center justify-center">
                  <Icon name="Info" size={20} className="text-primary mr-2" />
                  Как использовать донат валюту?
                </h4>
                <div className="grid md:grid-cols-2 gap-4 text-gray-300">
                  <div className="flex items-center">
                    <Icon name="ShoppingBag" size={16} className="text-primary mr-2" />
                    Покупка предметов в игре
                  </div>
                  <div className="flex items-center">
                    <Icon name="Sparkles" size={16} className="text-primary mr-2" />
                    Улучшение экипировки
                  </div>
                  <div className="flex items-center">
                    <Icon name="Home" size={16} className="text-primary mr-2" />
                    Покупка территорий
                  </div>
                  <div className="flex items-center">
                    <Icon name="Zap" size={16} className="text-primary mr-2" />
                    Временные бусты
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Privileges Section */}
        {activeSection === 'privileges' && (
          <section className="animate-fade-in">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Выберите привилегию</h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {privileges.map((privilege) => (
                <Card key={privilege.id} className={`relative bg-gray-800/50 border-gray-700 hover:border-primary/50 transition-all hover:scale-105 ${privilege.popular ? 'ring-2 ring-primary' : ''}`}>
                  {privilege.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1">
                      Популярно
                    </Badge>
                  )}
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name={privilege.icon as any} size={32} className="text-primary" />
                    </div>
                    <CardTitle className="text-2xl text-white">{privilege.name}</CardTitle>
                    <CardDescription className="text-3xl font-bold text-primary">
                      {privilege.price}₽
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {privilege.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <Icon name="Check" size={16} className="text-primary mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90 text-white"
                      onClick={() => handlePurchase(privilege.name, privilege.price)}
                    >
                      Купить сейчас
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Rules Section */}
        {activeSection === 'rules' && (
          <section className="animate-fade-in">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">Правила сервера</h3>
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-xl text-white flex items-center">
                    <Icon name="Shield" size={24} className="text-primary mr-3" />
                    Основные правила
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    Соблюдение правил обязательно для всех игроков
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {rules.map((rule, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                          <span className="text-primary font-bold text-sm">{index + 1}</span>
                        </div>
                        <p className="text-gray-300 leading-relaxed">{rule}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Icon name="AlertTriangle" size={20} className="text-yellow-500 mr-2" />
                      <span className="text-yellow-500 font-semibold">Важно</span>
                    </div>
                    <p className="text-gray-300 text-sm">
                      Нарушение правил может привести к временной или постоянной блокировке аккаунта.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        )}

        {/* Support Section */}
        {activeSection === 'support' && (
          <section className="animate-fade-in">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">Поддержка</h3>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Icon name="MessageCircle" size={24} className="text-primary mr-3" />
                      Discord
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">
                      Присоединяйтесь к нашему Discord серверу для быстрой поддержки
                    </p>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                      Присоединиться
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/50 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Icon name="Mail" size={24} className="text-primary mr-3" />
                      Email
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">
                      Напишите нам на почту для решения сложных вопросов
                    </p>
                    <p className="text-primary font-mono">support@minecraft-server.ru</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Часто задаваемые вопросы</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible>
                    {faq.map((item, index) => (
                      <AccordionItem key={index} value={`item-${index}`} className="border-gray-700">
                        <AccordionTrigger className="text-white hover:text-primary">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-300">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-black/30 border-t border-gray-700 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 MineCraft Донат. Все права защищены.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            IP сервера: mc.server.ru
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;