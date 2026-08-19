Take as an example this web page
![[Pasted image 20260819151219.png]]

Every one of these elements can be find in the dom, for example the HTML tag for the username is: 

```HTML
<input class="input_error form_input" placeholder="Username" data-test="username" id="user-name" autocorrect="off" autocapitalize="none" type="text" value="" name="user-name">
```

We have 3 ways of finding this selector using playwright
# Using ID
*tagname#id* or just *#id*
```
input#user-name or #user-name
```

# Using class
*tagname.class* or *.class*
```
input.form_input or .form_input
```

# Using Attribute 
