var dest = 'public';
var src = 'app/assets';

module.exports = {
  // 出力先の指定
  dest: dest,

  // jsのビルド設定
  js: {
    //src: src + '/scripts/**',
    dest: dest + '/scripts',
    uglify: false
  },

  sass: {
    //src: src + '/styles/**',
    dest: dest + '/styles',
    uglify: false,
    base: src + '/styles',
    entry: src + '/styles/*/*.scss',
  },

  // webpackの設定
  webpack: {
    base: src + '/scripts',
    entry: src + '/scripts/*/*.js',
  }
}
