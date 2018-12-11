const dataDocs = {
    projectName: 'Kemodijakarta Server',
    mainRoute: '/api',
    otherRoute: [
      {
        user: '/api/user',
        field: 'username, password, email, role',
        method: [
          {
            GET: '/api/user/getallusers',
            POST: '/api/user/registeruser',
            PUT: '/api/user/resetpassword/:id',
            PUT: '/api/user/changeprofileuser/:id',
            DELETE: '/api/user/deleteuser/:id'
          }
        ]
      },
      {
        article: '/api/article',
        field: 'judul, isi, img, view, createdDate, authorId',
        method: [
          {
            GET: '/api/article/getallarticles',
            POST: '/api/article/createarticle',
            PUT: '/api/article/changeimagearticle/:id',
            PUT: '/api/article/changearticle/:id',
            DELETE: '/api/article/deletearticle/:id'
          }
        ]
      }
    ]
}

module.exports = { dataDocs }