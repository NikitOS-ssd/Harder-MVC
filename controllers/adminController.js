exports.adminIdentity = function(req, res) {
  res.send(`
    <div>
      <h1>Вы точно администратор?)</h1>
      <form action="/admin/post-admin" method="post">
        <input type="text" name="login" placeholder="Введите логин"/>
        <input type="password" name="password" placeholder="Введите пароль"/>

        <input type="submit" value="Отправить"/>
      </form>
    </div>
  `);
};
exports.showAdminpanel = function(req, res) {
  res.send(`Это админ панель`);
};
exports.postAdmin = function(req, res) {
  var login = req.body.login;
  var password = req.body.password;

  console.log(login + '\n' + password);

  res.redirect('/admin/panel');
};
