// const { User, Post, Hashtag } = require('../models');
//
// exports.renderProfile = (req, res) => {
//   res.render('profile', { title: '내 정보 - NodeBird' });
// };
//
// exports.renderJoin = (req, res) => {
//   res.render('join', { title: '회원가입 - NodeBird' });
// };
//
// exports.renderMain = async (req, res, next) => {
//   //paging
//
//   let pageSize =10;
//   let currentPage = Number(req.query.currentPage) || 1; // 쿼리에서 현재 페이지 번호를 가져옵니다
//
// //데이터베이스 쿼리해서 계산해야됨
//   let totalSize = 0;
//
//
//   try {
//     const posts = await Post.findAll({
//       include: {
//         model: User,
//         attributes: ['id', 'nick'],
//       },
//     });
//
//       totalSize = posts.length;
//   } catch (err) {
//     console.error(err);
//     next(err);
//   }
// };
//
// let offset = (currentPage - 1) * pageSize;
//
//   try {
//     const posts = await Post.findAll({
//       include: {
//         model: User,
//         attributes: ['id', 'nick'],
//       },
//       offset: Number(offset) || 0,
//       limit: pageSize,
//       order: [['createdAt', 'DESC']],
//     });
//     res.render('main', {
//       title: 'NodeBird',
//       twits: posts,
//     });
//   } catch (err) {
//     console.error(err);
//     next(err);
//   }
// }
//
// exports.renderHashtag = async (req, res, next) => {
//   const query = req.query.hashtag;
//   if (!query) {
//     return res.redirect('/');
//   }
//   try {
//     const hashtag = await Hashtag.findOne({ where: { title: query } });
//     let posts = [];
//     if (hashtag) {
//       posts = await hashtag.getPosts({ include: [{ model: User }] });
//     }
//
//     return res.render('main', {
//       title: `${query} | NodeBird`,
//       twits: posts,
//     });
//   } catch (error) {
//     console.error(error);
//     return next(error);
//   }
// };


const { User, Post, Hashtag } = require('../models');

// 프로필 페이지 렌더링
exports.renderProfile = (req, res) => {
  res.render('profile', { title: '내 정보 - NodeBird' });
};

// 회원가입 페이지 렌더링
exports.renderJoin = (req, res) => {
  res.render('join', { title: '회원가입 - NodeBird' });
};

// 메인 페이지 렌더링
exports.renderMain = async (req, res, next) => {
  // 페이지네이션 변수
  let pageSize = 10;
  let currentPage = Number(req.query.currentPage) || 1; // 쿼리에서 현재 페이지 번호를 가져옵니다
  let offset = (currentPage - 1) * pageSize; // 오프셋 계산

  try {
    // 총 게시물 수를 구하기 위한 쿼리
    let totalSize = 0;
    const totalPosts = await Post.findAll({
      include: {
        model: User,
        attributes: ['id', 'nick'],
      },
    });
    totalSize = totalPosts.length;

    // 페이지네이션을 적용한 게시물 쿼리
    const posts = await Post.findAll({
      include: {
        model: User,
        attributes: ['id', 'nick'],
      },
      offset: offset,
      limit: pageSize,
      order: [['createdAt', 'DESC']],
    });

    res.render('main', {
      title: 'NodeBird',
      twits: posts,
      totalSize: totalSize,
      currentPage: currentPage,
      totalPages: Math.ceil(totalSize / pageSize),
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

// 해시태그 페이지 렌더링
exports.renderHashtag = async (req, res, next) => {
  const query = req.query.hashtag;
  if (!query) {
    return res.redirect('/');
  }
  try {
    const hashtag = await Hashtag.findOne({ where: { title: query } });
    let posts = [];
    if (hashtag) {
      posts = await hashtag.getPosts({ include: [{ model: User }] });
    }

    return res.render('main', {
      title: `${query} | NodeBird`,
      twits: posts,
    });
  } catch (error) {
    console.error(error);
    return next(error);
  }
};
