module.exports = {
  "__version": "9.1.1",
  "CodeMirror": {
    "Should render a \"html\" component with a proper syntax-highlight": {
      "1": "<div spellcheck=\"false\"\n  autocorrect=\"off\"\n  autocapitalize=\"off\"\n  translate=\"no\"\n  contenteditable=\"true\"\n  class=\"cm-content\"\n  style=\"tab-size: 4;\"\n  role=\"textbox\"\n  aria-multiline=\"true\"\n  data-gramm=\"false\"\n  tabindex=\"-1\"\n  aria-describedby=\"exit-instructions-html\">\n  <div class=\"cm-activeLine cm-line\"><br></div>\n  <div class=\"cm-line\">&lt;!DOCTYPE html&gt;</div>\n  <div class=\"cm-line\"><span class=\"ͼ10\">&lt;</span><span class=\"ͼu\">html</span>\n    <span class=\"ͼy\">lang</span>=<span class=\"ͼz\">\"en\"</span><span\n      class=\"ͼ10\">&gt;</span></div>\n  <div class=\"cm-line\"> <span class=\"ͼ10\">&lt;</span><span\n      class=\"ͼu\">head</span><span class=\"ͼ10\">&gt;</span></div>\n  <div class=\"cm-line\"> <span class=\"ͼ10\">&lt;</span><span\n      class=\"ͼu\">meta</span> <span class=\"ͼy\">charset</span>=<span\n      class=\"ͼz\">\"UTF-8\"</span><span class=\"ͼ10\">&gt;</span></div>\n  <div class=\"cm-line\"> <span class=\"ͼ10\">&lt;</span><span\n      class=\"ͼu\">meta</span> <span class=\"ͼy\">name</span>=<span\n      class=\"ͼz\">\"viewport\"</span> <span class=\"ͼy\">content</span>=<span\n      class=\"ͼz\">\"width=device-width, initial-scale=1.0\"</span><span\n      class=\"ͼ10\">&gt;</span></div>\n  <div class=\"cm-line\"> <span class=\"ͼ10\">&lt;</span><span\n      class=\"ͼu\">meta</span> <span class=\"ͼy\">http-equiv</span>=<span\n      class=\"ͼz\">\"X-UA-Compatible\"</span> <span class=\"ͼy\">content</span>=<span\n      class=\"ͼz\">\"ie=edge\"</span><span class=\"ͼ10\">&gt;</span></div>\n  <div class=\"cm-line\"> <span class=\"ͼ10\">&lt;</span><span\n      class=\"ͼu\">title</span><span class=\"ͼ10\">&gt;</span>HTML 5\n    Boilerplate<span class=\"ͼ10\">&lt;/</span><span class=\"ͼu\">title</span><span\n      class=\"ͼ10\">&gt;</span></div>\n  <div class=\"cm-line\"> <span class=\"ͼ10\">&lt;</span><span\n      class=\"ͼu\">link</span> <span class=\"ͼy\">rel</span>=<span\n      class=\"ͼz\">\"stylesheet\"</span> <span class=\"ͼy\">href</span>=<span\n      class=\"ͼz\">\"style.css\"</span><span class=\"ͼ10\">&gt;</span></div>\n  <div class=\"cm-line\"> <span class=\"ͼ10\">&lt;/</span><span\n      class=\"ͼu\">head</span><span class=\"ͼ10\">&gt;</span></div>\n  <div class=\"cm-line\"> <span class=\"ͼ10\">&lt;</span><span\n      class=\"ͼu\">body</span><span class=\"ͼ10\">&gt;</span></div>\n  <div class=\"cm-line\"> <span class=\"ͼ10\">&lt;</span><span\n      class=\"ͼu\">script</span> <span class=\"ͼy\">src</span>=<span\n      class=\"ͼz\">\"index.js\"</span><span class=\"ͼ10\">&gt;</span><span\n      class=\"ͼ10\">&lt;/</span><span class=\"ͼu\">script</span><span\n      class=\"ͼ10\">&gt;</span></div>\n  <div class=\"cm-line\"> <span class=\"ͼ10\">&lt;/</span><span\n      class=\"ͼu\">body</span><span class=\"ͼ10\">&gt;</span></div>\n  <div class=\"cm-line\"><span class=\"ͼ10\">&lt;/</span><span\n      class=\"ͼu\">html</span><span class=\"ͼ10\">&gt;</span></div>\n  <div class=\"cm-line\"><br></div>\n</div>"
    },
    "Should render a \"javascript\" component with a proper syntax-highlight": {
      "1": "<div spellcheck=\"false\"\n  autocorrect=\"off\"\n  autocapitalize=\"off\"\n  translate=\"no\"\n  contenteditable=\"true\"\n  class=\"cm-content\"\n  style=\"tab-size: 4;\"\n  role=\"textbox\"\n  aria-multiline=\"true\"\n  data-gramm=\"false\"\n  tabindex=\"-1\"\n  aria-describedby=\"exit-instructions-js\">\n  <div class=\"cm-activeLine cm-line\"><br></div>\n  <div class=\"cm-line\"><span class=\"ͼs\">function</span> <span\n      class=\"ͼx\">foo</span><span class=\"ͼ10\">(</span><span\n      class=\"ͼv\">params</span><span class=\"ͼ10\">)</span> <span\n      class=\"ͼ10\">{</span></div>\n  <div class=\"cm-line\"> <span class=\"ͼs\">return</span> <span\n      class=\"ͼv\">params</span></div>\n  <div class=\"cm-line\"><span class=\"ͼ10\">}</span></div>\n  <div class=\"cm-line\"><br></div>\n  <div class=\"cm-line\"><span class=\"ͼs\">const</span> <span class=\"ͼv\">baz</span>\n    = <span class=\"ͼ10\">(</span><span class=\"ͼv\">foo</span><span\n      class=\"ͼ10\">)</span> <span class=\"ͼ10\">=&gt;</span> <span\n      class=\"ͼ10\">{</span></div>\n  <div class=\"cm-line\"> <span class=\"ͼs\">return</span> <span\n      class=\"ͼv\">foo</span></div>\n  <div class=\"cm-line\"><span class=\"ͼ10\">}</span></div>\n  <div class=\"cm-line\"><br></div>\n  <div class=\"cm-line\"><span class=\"ͼs\">const</span> <span\n      class=\"ͼv\">array</span> = <span class=\"ͼ10\">[</span><span\n      class=\"ͼ10\">]</span><span class=\"ͼ10\">;</span></div>\n  <div class=\"cm-line\"><span class=\"ͼs\">const</span> <span\n      class=\"ͼv\">object</span> = <span class=\"ͼ10\">{</span><span\n      class=\"ͼ10\">}</span><span class=\"ͼ10\">;</span></div>\n  <div class=\"cm-line\"><span class=\"ͼs\">const</span> <span\n      class=\"ͼv\">regex</span> = <span class=\"ͼs\">new</span> <span\n      class=\"ͼv\">Regex</span><span class=\"ͼ10\">(</span><span\n      class=\"ͼ11\">//);</span></div>\n  <div class=\"cm-line\"><br></div>\n  <div class=\"cm-line\"><span class=\"ͼs\">const</span> <span\n      class=\"ͼv\">expr</span> = <span class=\"ͼz\">'Papayas'</span><span\n      class=\"ͼ10\">;</span></div>\n  <div class=\"cm-line\"><span class=\"ͼs\">switch</span> <span\n      class=\"ͼ10\">(</span><span class=\"ͼv\">expr</span><span class=\"ͼ10\">)</span>\n    <span class=\"ͼ10\">{</span></div>\n  <div class=\"cm-line\"> <span class=\"ͼs\">case</span> <span\n      class=\"ͼz\">'Oranges'</span><span class=\"ͼ10\">:</span></div>\n  <div class=\"cm-line\"> <span class=\"ͼv\">console</span>.<span\n      class=\"ͼy\">log</span><span class=\"ͼ10\">(</span><span class=\"ͼz\">'Oranges\n      are $0.59 a pound.'</span><span class=\"ͼ10\">)</span><span\n      class=\"ͼ10\">;</span></div>\n  <div class=\"cm-line\"> <span class=\"ͼs\">break</span><span class=\"ͼ10\">;</span>\n  </div>\n  <div class=\"cm-line\"> <span class=\"ͼs\">case</span> <span\n      class=\"ͼz\">'Mangoes'</span><span class=\"ͼ10\">:</span></div>\n  <div class=\"cm-line\"> <span class=\"ͼs\">case</span> <span\n      class=\"ͼz\">'Papayas'</span><span class=\"ͼ10\">:</span></div>\n  <div class=\"cm-line\"> <span class=\"ͼv\">console</span>.<span\n      class=\"ͼy\">log</span><span class=\"ͼ10\">(</span><span class=\"ͼz\">'Mangoes\n      and papayas are $2.79 a pound.'</span><span class=\"ͼ10\">)</span><span\n      class=\"ͼ10\">;</span></div>\n  <div class=\"cm-line\"> <span class=\"ͼ11\">// expected output: \"Mangoes and\n      papayas are $2.79 a pound.\"</span></div>\n  <div class=\"cm-line\"> <span class=\"ͼs\">break</span><span class=\"ͼ10\">;</span>\n  </div>\n  <div class=\"cm-line\"> <span class=\"ͼs\">default</span><span\n      class=\"ͼ10\">:</span></div>\n  <div class=\"cm-line\"> <span class=\"ͼv\">console</span>.<span\n      class=\"ͼy\">log</span><span class=\"ͼ10\">(</span><span class=\"ͼz\">`Sorry, we\n      are out of ${</span><span class=\"ͼv\">expr</span><span\n      class=\"ͼz\">}.`</span><span class=\"ͼ10\">)</span><span class=\"ͼ10\">;</span>\n  </div>\n  <div class=\"cm-line\"><span class=\"ͼ10\">}</span></div>\n  <div class=\"cm-line\"><br></div>\n</div>"
    },
    "Should render a \"jsx\" component with a proper syntax-highlight": {
      "1": "<div spellcheck=\"false\"\n  autocorrect=\"off\"\n  autocapitalize=\"off\"\n  translate=\"no\"\n  contenteditable=\"true\"\n  class=\"cm-content\"\n  style=\"tab-size: 4;\"\n  role=\"textbox\"\n  aria-multiline=\"true\"\n  data-gramm=\"false\"\n  tabindex=\"-1\"\n  aria-describedby=\"exit-instructions-jsx\">\n  <div class=\"cm-activeLine cm-line\"><br></div>\n  <div class=\"cm-line\"><span class=\"ͼs\">function</span> <span\n      class=\"ͼx\">Greeting</span><span class=\"ͼ10\">(</span><span\n      class=\"ͼ10\">{</span> <span class=\"ͼy\">name</span> <span\n      class=\"ͼ10\">}</span><span class=\"ͼ10\">)</span> <span class=\"ͼ10\">{</span>\n  </div>\n  <div class=\"cm-line\"> <span class=\"ͼs\">return</span> <span\n      class=\"ͼ10\">&lt;</span><span class=\"ͼu\">h1</span><span\n      class=\"ͼ10\">&gt;</span>Hello, <span class=\"ͼ10\">{</span><span\n      class=\"ͼv\">name</span><span class=\"ͼ10\">}</span>!<span\n      class=\"ͼ10\">&lt;/</span><span class=\"ͼu\">h1</span><span\n      class=\"ͼ10\">&gt;</span><span class=\"ͼ10\">;</span></div>\n  <div class=\"cm-line\"><span class=\"ͼ10\">}</span></div>\n  <div class=\"cm-line\"><br></div>\n  <div class=\"cm-line\"><span class=\"ͼs\">export</span> <span\n      class=\"ͼs\">default</span> <span class=\"ͼs\">function</span> <span\n      class=\"ͼx\">App</span><span class=\"ͼ10\">(</span><span class=\"ͼ10\">)</span>\n    <span class=\"ͼ10\">{</span></div>\n  <div class=\"cm-line\"> <span class=\"ͼs\">return</span> <span\n      class=\"ͼ10\">(</span></div>\n  <div class=\"cm-line\"> <span class=\"ͼ10\">&lt;</span><span\n      class=\"ͼu\">div</span><span class=\"ͼ10\">&gt;</span></div>\n  <div class=\"cm-line\"> <span class=\"ͼ10\">&lt;</span><span\n      class=\"ͼu\">Greeting</span> <span class=\"ͼy\">name</span>=<span\n      class=\"ͼz\">\"Divyesh\"</span> <span class=\"ͼ10\">/&gt;</span></div>\n  <div class=\"cm-line\"> <span class=\"ͼ10\">&lt;</span><span\n      class=\"ͼu\">Greeting</span> <span class=\"ͼy\">name</span>=<span\n      class=\"ͼz\">\"Sarah\"</span> <span class=\"ͼ10\">/&gt;</span></div>\n  <div class=\"cm-line\"> <span class=\"ͼ10\">&lt;</span><span\n      class=\"ͼu\">Greeting</span> <span class=\"ͼy\">name</span>=<span\n      class=\"ͼz\">\"Taylor\"</span> <span class=\"ͼ10\">/&gt;</span></div>\n  <div class=\"cm-line\"> <span class=\"ͼ10\">&lt;/</span><span\n      class=\"ͼu\">div</span><span class=\"ͼ10\">&gt;</span></div>\n  <div class=\"cm-line\"> <span class=\"ͼ10\">)</span><span class=\"ͼ10\">;</span>\n  </div>\n  <div class=\"cm-line\"><span class=\"ͼ10\">}</span> </div>\n  <div class=\"cm-line\"><br></div>\n</div>"
    },
    "Should render a \"css\" component with a proper syntax-highlight": {
      "1": "<div spellcheck=\"false\"\n  autocorrect=\"off\"\n  autocapitalize=\"off\"\n  translate=\"no\"\n  contenteditable=\"true\"\n  class=\"cm-content\"\n  style=\"tab-size: 4;\"\n  role=\"textbox\"\n  aria-multiline=\"true\"\n  data-gramm=\"false\"\n  tabindex=\"-1\"\n  aria-describedby=\"exit-instructions-css\">\n  <div class=\"cm-activeLine cm-line\"><br></div>\n  <div class=\"cm-line\"><span class=\"ͼu\">body</span> <span class=\"ͼ10\">{</span>\n  </div>\n  <div class=\"cm-line\"> <span class=\"ͼy\">background-color</span><span\n      class=\"ͼ10\">:</span> <span class=\"ͼt\">lightblue</span><span\n      class=\"ͼ10\">;</span></div>\n  <div class=\"cm-line\"><span class=\"ͼ10\">}</span></div>\n  <div class=\"cm-line\"><br></div>\n  <div class=\"cm-line\"><span class=\"ͼu\">h1</span> <span class=\"ͼ10\">{</span>\n  </div>\n  <div class=\"cm-line\"> <span class=\"ͼy\">color</span><span class=\"ͼ10\">:</span>\n    <span class=\"ͼt\">white</span><span class=\"ͼ10\">;</span></div>\n  <div class=\"cm-line\"> <span class=\"ͼy\">text-align</span><span\n      class=\"ͼ10\">:</span> <span class=\"ͼt\">center</span><span\n      class=\"ͼ10\">;</span></div>\n  <div class=\"cm-line\"><span class=\"ͼ10\">}</span></div>\n  <div class=\"cm-line\"><br></div>\n  <div class=\"cm-line\"><span class=\"ͼu\">p</span> <span class=\"ͼ10\">{</span>\n  </div>\n  <div class=\"cm-line\"> <span class=\"ͼy\">font-family</span><span\n      class=\"ͼ10\">:</span> <span class=\"ͼt\">verdana</span><span\n      class=\"ͼ10\">;</span></div>\n  <div class=\"cm-line\"> <span class=\"ͼy\">font-size</span><span\n      class=\"ͼ10\">:</span> <span class=\"ͼt\">20</span><span\n      class=\"ͼs\">px</span><span class=\"ͼ10\">;</span></div>\n  <div class=\"cm-line\"><span class=\"ͼ10\">}</span> </div>\n  <div class=\"cm-line\"><br></div>\n</div>"
    },
    "Should render a \"less\" component with a proper syntax-highlight": {
      "1": "<div spellcheck=\"false\"\n  autocorrect=\"off\"\n  autocapitalize=\"off\"\n  translate=\"no\"\n  contenteditable=\"true\"\n  class=\"cm-content\"\n  style=\"tab-size: 4;\"\n  role=\"textbox\"\n  aria-multiline=\"true\"\n  data-gramm=\"false\"\n  tabindex=\"-1\"\n  aria-describedby=\"exit-instructions-less\">\n  <div class=\"cm-activeLine cm-line\"><br></div>\n  <div class=\"cm-line\"><span class=\"ͼs\">@width</span><span class=\"ͼ10\">:</span>\n    10<span class=\"ͼs\">px</span><span class=\"ͼ10\">;</span></div>\n  <div class=\"cm-line\"><span class=\"ͼs\">@height</span><span class=\"ͼ10\">:</span>\n    <span class=\"ͼs\">@width</span> + 10<span class=\"ͼu\">px</span><span\n      class=\"ͼ10\">;</span></div>\n  <div class=\"cm-line\"><br></div>\n  <div class=\"cm-line\">#header <span class=\"ͼ10\">{</span></div>\n  <div class=\"cm-line\"> <span class=\"ͼy\">width</span><span class=\"ͼ10\">:</span>\n    @<span class=\"ͼt\">width</span><span class=\"ͼ10\">;</span></div>\n  <div class=\"cm-line\"> <span class=\"ͼy\">height</span><span class=\"ͼ10\">:</span>\n    @<span class=\"ͼt\">height</span><span class=\"ͼ10\">;</span></div>\n  <div class=\"cm-line\"><span class=\"ͼ10\">}</span> </div>\n  <div class=\"cm-line\"><br></div>\n</div>"
    },
    "Should render a \"vue\" component with a proper syntax-highlight": {
      "1": "<div spellcheck=\"false\"\n  autocorrect=\"off\"\n  autocapitalize=\"off\"\n  translate=\"no\"\n  contenteditable=\"true\"\n  class=\"cm-content\"\n  style=\"tab-size: 4;\"\n  role=\"textbox\"\n  aria-multiline=\"true\"\n  data-gramm=\"false\"\n  tabindex=\"-1\"\n  aria-describedby=\"exit-instructions-vue\">\n  <div class=\"cm-activeLine cm-line\"><br></div>\n  <div class=\"cm-line\"><span class=\"ͼ10\">&lt;</span><span\n      class=\"ͼu\">template</span><span class=\"ͼ10\">&gt;</span></div>\n  <div class=\"cm-line\"> <span class=\"ͼ10\">&lt;</span><span class=\"ͼu\">div</span>\n    <span class=\"ͼy\">class</span>=<span class=\"ͼz\">\"column is-12\"</span><span\n      class=\"ͼ10\">&gt;</span></div>\n  <div class=\"cm-line\"> <span class=\"ͼ10\">&lt;</span><span\n      class=\"ͼu\">label</span> <span class=\"ͼy\">class</span>=<span\n      class=\"ͼz\">\"label\"</span> <span class=\"ͼy\">for</span>=<span\n      class=\"ͼz\">\"email\"</span><span class=\"ͼ10\">&gt;</span>Email<span\n      class=\"ͼ10\">&lt;/</span><span class=\"ͼu\">label</span><span\n      class=\"ͼ10\">&gt;</span></div>\n  <div class=\"cm-line\"> <span class=\"ͼ10\">&lt;</span><span class=\"ͼu\">p</span>\n    <span class=\"ͼy\">:class</span>=<span class=\"ͼz\">\"{ 'control': true\n      }\"</span><span class=\"ͼ10\">&gt;</span></div>\n  <div class=\"cm-line\"> <span class=\"ͼ10\">&lt;</span><span\n      class=\"ͼu\">input</span> <span class=\"ͼy\">v-validate</span>=<span\n      class=\"ͼz\">\"'required|email'\"</span> <span class=\"ͼy\">:class</span>=<span\n      class=\"ͼz\">\"{'input': true, 'is-danger': errors.has('email') }\"</span>\n    <span class=\"ͼy\">name</span>=<span class=\"ͼz\">\"email\"</span> <span\n      class=\"ͼy\">type</span>=<span class=\"ͼz\">\"text\"</span> <span\n      class=\"ͼy\">placeholder</span>=<span class=\"ͼz\">\"Email\"</span><span\n      class=\"ͼ10\">&gt;</span></div>\n  <div class=\"cm-line\"> <span class=\"ͼ10\">&lt;</span><span\n      class=\"ͼu\">span</span> <span class=\"ͼy\">v-show</span>=<span\n      class=\"ͼz\">\"errors.has('email')\"</span> <span\n      class=\"ͼy\">class</span>=<span class=\"ͼz\">\"help is-danger\"</span><span\n      class=\"ͼ10\">&gt;</span>{{ errors.first('email') }}<span\n      class=\"ͼ10\">&lt;/</span><span class=\"ͼu\">span</span><span\n      class=\"ͼ10\">&gt;</span></div>\n  <div class=\"cm-line\"> <span class=\"ͼ10\">&lt;/</span><span\n      class=\"ͼu\">p</span><span class=\"ͼ10\">&gt;</span></div>\n  <div class=\"cm-line\"> <span class=\"ͼ10\">&lt;/</span><span\n      class=\"ͼu\">div</span><span class=\"ͼ10\">&gt;</span></div>\n  <div class=\"cm-line\"><span class=\"ͼ10\">&lt;/</span><span\n      class=\"ͼu\">template</span><span class=\"ͼ10\">&gt;</span></div>\n  <div class=\"cm-line\"><br></div>\n  <div class=\"cm-line\"><span class=\"ͼ10\">&lt;</span><span\n      class=\"ͼu\">script</span><span class=\"ͼ10\">&gt;</span></div>\n  <div class=\"cm-line\"><span class=\"ͼs\">export</span> <span\n      class=\"ͼs\">default</span> <span class=\"ͼ10\">{</span></div>\n  <div class=\"cm-line\"> <span class=\"ͼy\">name</span><span class=\"ͼ10\">:</span>\n    <span class=\"ͼz\">'basic-example'</span></div>\n  <div class=\"cm-line\"><span class=\"ͼ10\">}</span><span class=\"ͼ10\">;</span>\n  </div>\n  <div class=\"cm-line\"><span class=\"ͼ10\">&lt;/</span><span\n      class=\"ͼu\">script</span><span class=\"ͼ10\">&gt;</span></div>\n  <div class=\"cm-line\"><br></div>\n</div>"
    },
    "should render a decoration component properly": {
      "1": "<div spellcheck=\"false\"\n  autocorrect=\"off\"\n  autocapitalize=\"off\"\n  translate=\"no\"\n  contenteditable=\"false\"\n  class=\"cm-content\"\n  style=\"tab-size: 4;\"\n  role=\"textbox\"\n  aria-multiline=\"true\"\n  aria-readonly=\"true\"\n  data-gramm=\"false\">\n  <div class=\"highlight cm-line\"><span class=\"ͼs\">const</span> <span\n      class=\"ͼv\">people</span> = <span class=\"ͼ10\">[</span><span\n      class=\"ͼ10\">{</span></div>\n  <div class=\"cm-line\"> <span class=\"ͼy\">id</span><span class=\"ͼ10\">:</span>\n    <span class=\"ͼt\">0</span><span class=\"ͼ10\">,</span></div>\n  <div class=\"cm-line\"> <span class=\"ͼy\">name</span><span class=\"ͼ10\">:</span>\n    <span class=\"ͼz\">'Creola Katherine Johnson'</span><span class=\"ͼ10\">,</span>\n  </div>\n  <div class=\"cm-line\"> <span class=\"ͼy\">profession</span><span\n      class=\"ͼ10\">:</span> <span class=\"ͼz\">'mathematician'</span><span\n      class=\"ͼ10\">,</span></div>\n  <div class=\"cm-line\"><span class=\"ͼ10\">}</span><span class=\"ͼ10\">,</span>\n    <span class=\"ͼ10\">{</span></div>\n  <div class=\"cm-line\"> <span class=\"ͼy\">id</span><span class=\"ͼ10\">:</span>\n    <span class=\"ͼt\">1</span><span class=\"ͼ10\">,</span></div>\n  <div class=\"cm-line\"> <span class=\"ͼy\">name</span><span class=\"ͼ10\">:</span>\n    <span class=\"ͼz\">'Mario José Molina-Pasquel Henríquez'</span><span\n      class=\"ͼ10\">,</span></div>\n  <div class=\"cm-line\"> <span class=\"ͼy\">profession</span><span\n      class=\"ͼ10\">:</span> <span class=\"ͼz\">'chemist'</span><span\n      class=\"ͼ10\">,</span></div>\n  <div class=\"highlight cm-line\"><span class=\"ͼ10\">}</span><span\n      class=\"ͼ10\">]</span><span class=\"ͼ10\">;</span></div>\n  <div class=\"cm-line\"><br></div>\n  <div class=\"cm-line\"><span class=\"ͼs\">export</span> <span\n      class=\"ͼs\">default</span> <span class=\"ͼs\">function</span> <span\n      class=\"ͼx\">List</span><span class=\"ͼ10\">(</span><span class=\"ͼ10\">)</span>\n    <span class=\"ͼ10\">{</span></div>\n  <div class=\"cm-line\"> <span class=\"ͼs\">const</span> <span\n      class=\"ͼ10\">[</span><span class=\"ͼv\">text</span><span class=\"ͼ10\">,</span>\n    <span class=\"ͼv\">setText</span><span class=\"ͼ10\">]</span> = <span\n      class=\"widget\"\n      data-id=\"1\"><span class=\"ͼw\">useState</span><span\n        class=\"ͼ10\">(</span><span class=\"ͼz\">\"\"</span><span\n        class=\"ͼ10\">)</span></span></div>\n  <div class=\"cm-line\"> <span class=\"ͼs\">const</span> <span class=\"widget\"\n      data-id=\"2\"><span class=\"ͼv\">listItems</span></span> = <span\n      class=\"ͼv\">people</span>.<span class=\"ͼy\">map</span><span\n      class=\"ͼ10\">(</span><span class=\"ͼv\">person</span> <span\n      class=\"ͼ10\">=&gt;</span></div>\n  <div class=\"cm-line\"> <span class=\"ͼ10\">&lt;</span><span\n      class=\"ͼu\">li</span><span class=\"ͼ10\">&gt;</span><span\n      class=\"ͼ10\">{</span><span class=\"ͼv\">person</span><span\n      class=\"ͼ10\">}</span><span class=\"ͼ10\">&lt;/</span><span\n      class=\"ͼu\">li</span><span class=\"ͼ10\">&gt;</span></div>\n  <div class=\"cm-line\"> <span class=\"ͼ10\">)</span><span class=\"ͼ10\">;</span>\n  </div>\n  <div class=\"cm-line\"> <span class=\"ͼs\">return</span> <span\n      class=\"ͼ10\">&lt;</span><span class=\"ͼu\">ul</span><span\n      class=\"ͼ10\">&gt;</span><span class=\"ͼ10\">{</span><span\n      class=\"ͼv\">listItems</span><span class=\"ͼ10\">}</span><span\n      class=\"ͼ10\">&lt;/</span><span class=\"ͼu\">ul</span><span\n      class=\"ͼ10\">&gt;</span><span class=\"ͼ10\">;</span></div>\n  <div class=\"cm-line\"><span class=\"ͼ10\">}</span></div>\n</div>"
    },
    "should load the autocomplete CodeMirror extension": {
      "1": "<div spellcheck=\"false\"\n  autocorrect=\"off\"\n  autocapitalize=\"off\"\n  translate=\"no\"\n  contenteditable=\"true\"\n  class=\"cm-content\"\n  style=\"tab-size: 4;\"\n  role=\"textbox\"\n  aria-multiline=\"true\"\n  aria-autocomplete=\"list\"\n  aria-expanded=\"false\"\n  data-gramm=\"false\"\n  tabindex=\"-1\"\n  aria-describedby=\"exit-instructions-extensions\">\n  <div class=\"cm-line\"><span class=\"ͼs\">class</span> <span\n      class=\"cm-snippetField\">name</span> <span class=\"ͼ10\">{</span></div>\n  <div class=\"cm-line\"> <span class=\"ͼy\">constructor</span><span\n      class=\"ͼ10\">(</span><span class=\"cm-snippetField\"><span\n        class=\"ͼv\">params</span></span><span class=\"ͼ10\">)</span> <span\n      class=\"ͼ10\">{</span></div>\n  <div class=\"cm-line\"> <span class=\"cm-snippetFieldPosition\"\n      contenteditable=\"false\"></span>​</div>\n  <div class=\"cm-line\"> <span class=\"ͼ10\">}</span></div>\n  <div class=\"cm-line\"><span class=\"ͼ10\">}</span></div>\n</div>"
    }
  },
  "CodeViewer": {
    "should not be able to cut the content": {
      "1": "<div spellcheck=\"false\"\n  autocorrect=\"off\"\n  autocapitalize=\"off\"\n  translate=\"no\"\n  contenteditable=\"false\"\n  class=\"cm-content\"\n  style=\"tab-size: 4;\"\n  role=\"textbox\"\n  aria-multiline=\"true\"\n  aria-readonly=\"true\"\n  data-gramm=\"false\">\n  <div class=\"cm-line\"><span class=\"ͼs\">const</span> <span\n      class=\"ͼv\">people</span> = <span class=\"ͼ10\">[</span><span\n      class=\"ͼ10\">{</span></div>\n  <div class=\"cm-line\"> <span class=\"ͼy\">id</span><span class=\"ͼ10\">:</span>\n    <span class=\"ͼt\">0</span><span class=\"ͼ10\">,</span></div>\n  <div class=\"cm-line\"> <span class=\"ͼy\">name</span><span class=\"ͼ10\">:</span>\n    <span class=\"ͼz\">'Creola Katherine Johnson'</span><span class=\"ͼ10\">,</span>\n  </div>\n  <div class=\"cm-line\"> <span class=\"ͼy\">profession</span><span\n      class=\"ͼ10\">:</span> <span class=\"ͼz\">'mathematician'</span><span\n      class=\"ͼ10\">,</span></div>\n  <div class=\"cm-line\"><span class=\"ͼ10\">}</span><span class=\"ͼ10\">,</span>\n    <span class=\"ͼ10\">{</span></div>\n  <div class=\"cm-line\"> <span class=\"ͼy\">id</span><span class=\"ͼ10\">:</span>\n    <span class=\"ͼt\">1</span><span class=\"ͼ10\">,</span></div>\n  <div class=\"cm-line\"> <span class=\"ͼy\">name</span><span class=\"ͼ10\">:</span>\n    <span class=\"ͼz\">'Mario José Molina-Pasquel Henríquez'</span><span\n      class=\"ͼ10\">,</span></div>\n  <div class=\"cm-line\"> <span class=\"ͼy\">profession</span><span\n      class=\"ͼ10\">:</span> <span class=\"ͼz\">'chemist'</span><span\n      class=\"ͼ10\">,</span></div>\n  <div class=\"cm-line\"><span class=\"ͼ10\">}</span><span class=\"ͼ10\">]</span><span\n      class=\"ͼ10\">;</span></div>\n  <div class=\"cm-line\"><br></div>\n  <div class=\"cm-line\"><span class=\"ͼs\">export</span> <span\n      class=\"ͼs\">default</span> <span class=\"ͼs\">function</span> <span\n      class=\"ͼx\">List</span><span class=\"ͼ10\">(</span><span class=\"ͼ10\">)</span>\n    <span class=\"ͼ10\">{</span></div>\n  <div class=\"cm-line\"> <span class=\"ͼs\">const</span> <span\n      class=\"ͼv\">listItems</span> = <span class=\"ͼv\">people</span>.<span\n      class=\"ͼy\">map</span><span class=\"ͼ10\">(</span><span\n      class=\"ͼv\">person</span> <span class=\"ͼ10\">=&gt;</span></div>\n  <div class=\"cm-line\"> <span class=\"ͼ10\">&lt;</span><span\n      class=\"ͼu\">li</span><span class=\"ͼ10\">&gt;</span><span\n      class=\"ͼ10\">{</span><span class=\"ͼv\">person</span><span\n      class=\"ͼ10\">}</span><span class=\"ͼ10\">&lt;/</span><span\n      class=\"ͼu\">li</span><span class=\"ͼ10\">&gt;</span></div>\n  <div class=\"cm-line\"> <span class=\"ͼ10\">)</span><span class=\"ͼ10\">;</span>\n  </div>\n  <div class=\"cm-line\"> <span class=\"ͼs\">return</span> <span\n      class=\"ͼ10\">&lt;</span><span class=\"ͼu\">ul</span><span\n      class=\"ͼ10\">&gt;</span><span class=\"ͼ10\">{</span><span\n      class=\"ͼv\">listItems</span><span class=\"ͼ10\">}</span><span\n      class=\"ͼ10\">&lt;/</span><span class=\"ͼu\">ul</span><span\n      class=\"ͼ10\">&gt;</span><span class=\"ͼ10\">;</span></div>\n  <div class=\"cm-line\"><span class=\"ͼ10\">}</span></div>\n</div>"
    }
  }
}
