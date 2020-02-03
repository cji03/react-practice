module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "jest": true,
  },

  "extends": [
    "airbnb"
  ],
  // 自定义全局变量
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly",
    "_": true,
    "$": true,
  },

  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },

  "plugins": [
    "react",
  ],
  // ESLint 附带有大量的规则。你可以使用注释或配置文件修改你项目中要使用的规则。要改变一个规则设置，你必须将规则 ID 设置为下列值之一：
  // "off" 或 0 - 关闭规则
  // "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
  // "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
  "rules": {
    semi: 0,
    'no-useless-escape': 2,
    'react/jsx-filename-extension': 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/click-events-have-key-events": 0,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack.config.js',
      },
    },
  },
};