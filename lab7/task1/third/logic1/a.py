def cigar_party(cigars, is_weekend):
  return (cigars >= 40 and cigars <= 60) or (cigars >= 40 and is_weekend)

print(cigar_party(30, False))
print(cigar_party(50, True))
print(cigar_party(70, True))