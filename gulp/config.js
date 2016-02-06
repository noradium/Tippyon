var dest = 'public';
var src = 'app/assets';

module.exports = {
  // 出力先の指定
  dest: dest,

  // jsのビルド設定
  js: {
    src: src + '/scripts/**',
    dest: dest + '/scripts',
    uglify: false
  },

  // webpackの設定
  webpack: {
    base: src + '/scripts',
    entry: src + '/scripts/*/*.js',
  }
}
