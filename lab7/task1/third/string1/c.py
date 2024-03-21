def make_tags(tag, word):
  return '<' + tag + '>' + word + '</' + tag + '>'


print(make_tags("i", "any"))
print(make_tags("i", "Hello"))
print(make_tags("cite", "Yay"))