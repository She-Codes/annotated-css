if ( window.location.pathname.includes('/annotation.html') ) {
  var textarea1 = document.querySelector('.snippet1 .code-description textarea');
  var textarea2 = document.querySelector('.snippet1 .code textarea');
  var textarea3 = document.querySelector('.snippet2 .code-description textarea');
  var textarea4 = document.querySelector('.snippet2 .code textarea');
  var text1 = `<div class="dog">
    <div class="dog-body">
      <div class="dog-tail">
        <div class="dog-tail">
          <div class="dog-tail">
            <div class="dog-tail">
              <div class="dog-tail">
                <div class="dog-tail">
                  <div class="dog-tail">
                    <div class="dog-tail"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
  var text2 = `This is explaining the first div.
  Now this is explaining the second div.
  
  
  Now this is explaining all the other divs.
  
  
  
  
  
  
  
  
  
  
  
  
  `;
  var text3 = `.ball {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-top: 4rem;
    z-index: 0;
    
    &:after {
      content: '';
      position: absolute;
      display: block;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      border-radius: 50%;
      box-shadow: inset 0 -8px 0 0 rgba(black, 0.2);
      background: #6E64F0;
      z-index: 1;
    }
    
    &:focus {
      outline: none;
      
      &:after {      
        animation: bounce $interval * 2 infinite alternate;
      }
      
      @keyframes bounce {
        from {
          transform: scale(2);
          animation-timing-function: ease-in;
        }
        to {
          transform: scale(0.8);
          animation-timing-function: cubic-bezier(0, 0, 0, 1);
        }
      }
      
      @keyframes bounce-shadow {
        from {
          transform: scale(2.5, 2.6) translateY(-50%);
          animation-timing-function: ease-in;
        }
        to {
          transform: scale(0.5) translateY(0);
          animation-timing-function: cubic-bezier(0, 0, 0, 1);
        }
      }
      
      &:before {
        content: '';
        position: absolute;
        display: block;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: rgba(black, 0.05);
        animation: bounce-shadow $interval * 2 infinite alternate;
        z-index: -10;
      }
    }
  }`
  var text4 = `
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  `;
  
  var codeMirrorA = CodeMirror.fromTextArea(textarea1, {
      theme:  "tomorrow-night-eighties",
      lineNumbers: true,
      viewportMargin: Infinity
    });
  
  var codeMirrorB = CodeMirror.fromTextArea(textarea2, {
      theme:  "tomorrow-night-eighties",
      lineNumbers: true,
      mode: 'htmlmixed',
      viewportMargin: Infinity
    });
  
  var codeMirrorC = CodeMirror.fromTextArea(textarea3, {
      theme:  "tomorrow-night-eighties",
      lineNumbers: true,
      viewportMargin: Infinity
    });
  
  var codeMirrorD = CodeMirror.fromTextArea(textarea4, {
      theme:  "tomorrow-night-eighties",
      lineNumbers: true,
      viewportMargin: Infinity
    });
  
  codeMirrorA.setValue(text2);
  codeMirrorB.setValue(text1);
  codeMirrorC.setValue(text4);
  codeMirrorD.setValue(text3);
}
/*
New page

Main thing I'm going to be doing is adding new snippets dynamically
to the page which means adding new text areas and initializing 
Code Mirrors on them.

Also adding the switch as well as the add new and delete buttons

So everything in the .snippet-wrap div and in between will be
added when a new snippet is added to the page.

I guess this would be considered a template, but ultimately,
it would be a component because it's going to hold data.
Then data in the code-mirror, the type of code it is,
and it should have an id.

So on new page,
app component? would need to render the first empty snippet which
has 2 empty code mirrors, oh also description and codepen form

but on show page depending on the id of the annotation,
the app component? would render the annotation, which has
1 - 2 snippets oh and description and codepen

so how would the app handle these 2 different scenarios?
on show you would need to get the id param from the url and then 
load the correct annotation

well on the new page the app does not need to know about the 
stored annotations but the index page would

so certain code needs to run on the index, new, edit, show...

so maybe there's a 'new' component, an 'edit' component,
and so forth

so for the 'new' component there would be annotation id,
but I guess it would need to know about the other annotations
in order to come up with the id for the new annotation

so maybe there's also an app component that stores all the 
annotations and has a getter and possibly a setter?

so say with the new component what would update the database?

it's a component so it would keep track of it's snippets but 
it would also need to do something like submitNewAnnotation.
I guess that could be a standalone function or i could have
something like:

newModel = {

}

// View?

snippetComponent: component(function(props) {

}, {snippets: []})



*/

var appModel = {
  getAnnotations() {
    // get annotations
  }
};

var newModel = {

}
if ( window.location.pathname.includes('/new.html') ) {
  var app = {
    snippetCounter: 0,
    codeMirrors: {},
    addEmptySnippet() {
      var snippetTemplate = `
        <div class="switch-wrap">
          <div class="switch-outter">
            HTML
            <label class="switch">
              <input type="checkbox" id="switch-toggle">
              <span class="switch-label"></span>
            </label>
            CSS
          </div><!-- end .switch-outter -->
        </div><!-- end .switch-wrap -->

        <div class="snippet snippet1">
          <div class="code-description">
            <textarea></textarea>
          </div>
          <div class="code">
            <textarea></textarea>
          </div>
        </div><!-- end .snippet -->

        <div class="button-wrap">
          <button type="button" class="add">Add New</button>
          <button type="button" class="delete"><i class="fa fa-trash"></i></button>
        </div><!-- end .button-wrap -->`
        
      var snippetWrap = document.createElement('div');
      var descriptionTextarea, codeTextarea;

      snippetWrap.className = 'snippet-wrap';  
      snippetWrap.innerHTML = snippetTemplate;
      
      this.snippetCounter += 1;

      descriptionTextarea = snippetWrap.querySelector('.code-description textarea');
      codeTextarea = snippetWrap.querySelector('.code textarea');
      this.codeMirrors[this.snippetCounter + 'd'] = CodeMirror.fromTextArea(descriptionTextarea, {
        theme:  "tomorrow-night-eighties",
        lineNumbers: true,
        tabSize: 2
      });
      // need this otherwise text in editor overlaps line numbers / gutters
      this.codeMirrors[this.snippetCounter + 'd'].refresh();
      this.codeMirrors[this.snippetCounter + 'c'] = CodeMirror.fromTextArea(codeTextarea, {
        theme:  "tomorrow-night-eighties",
        lineNumbers: true,
        tabSize: 2
      });
      // need this otherwise text in editor overlaps line numbers / gutters
      this.codeMirrors[this.snippetCounter + 'c'].refresh();

      document.querySelector('.code-holder').appendChild(snippetWrap);
    }
  }

  app.addEmptySnippet();
}


