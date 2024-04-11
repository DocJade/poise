searchState.loadedDescShard("unicode_bidi", 0, "This crate implements the Unicode Bidirectional Algorithm …\nRepresents values of the Unicode character property …\nBidi information of the text.\nHardcoded Bidi data that ships with the unicode-bidi crate.\nInitial bidi information of the text.\nA maximal substring of characters with the same embedding …\nContains a reference of <code>BidiInfo</code> and one of its <code>paragraphs</code>.\nBidi information of text treated as a single paragraph.\nBidi information about a single paragraph\nTrait that abstracts over a text source for use by the …\nThe Unicode version of data\nIterator over (UTF-8) string slices returning (index, …\nFind the <code>BidiClass</code> of a single char.\nThis module holds deprecated assets only.\nReturn the paragraph’s Direction (Ltr, Rtl, or Mixed) …\nReturns if the paragraph is Left direction, right …\nThe upper bound of the range (exclusive).\nDirectional Formatting Characters\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet the base direction of the text provided according to …\nIf processed text has any computed RTL levels\nIf processed text has any computed RTL levels\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nWhether the paragraph is purely LTR.\nGets the length of the paragraph in the source text.\nBidi Embedding Level\nThe paragraph embedding level.\nReturns the <code>Level</code> of a certain character in the paragraph.\nThe directional embedding level of each byte in the text.\nThe directional embedding level of each byte in the text.\nFind the paragraphs and BidiClasses in a string of text.\nSplit the text into paragraphs and determine the bidi …\nDetermine the bidi embedding level.\nFind the paragraphs and BidiClasses in a string of text, …\nSplit the text into paragraphs and determine the bidi …\nDetermine the bidi embedding level, with a custom …\nThe BidiClass of the character at each byte in the text. …\nThe BidiClass of the character at each byte in the text.\nThe BidiClass of the character at each byte in the text.\nThe paragraph embedding level.\nThe boundaries and level of each paragraph within the text.\nThe boundaries and paragraph embedding level of each …\nThe paragraphs boundaries within the text, as byte indices.\nRe-order a line based on resolved levels and return the …\nRe-order a line based on resolved levels and return the …\nReorders pre-calculated levels of a sequence of characters.\nReorders pre-calculated levels of a sequence of characters.\nProduce the levels for this paragraph as needed for …\nProduce the levels for this paragraph as needed for …\nProduce the levels for this paragraph as needed for …\nProduce the levels for this paragraph as needed for …\nThe lower bound of the range (inclusive).\nThe text\nThe text\nThe text\nFind the level runs within a line and return them in …\nFind the level runs within a line and return them in …\nThis trait abstracts over a data source that is able to …\nThis is the return value of …\nIf this character is a bracket according to …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nWhether or not the requested bracket was an opening …\nThe corresponding opening bracket in this bracket pair, …\nFind the level runs within a line and return them in …\nARABIC LETTER MARK\nFIRST STRONG ISOLATE\nLEFT-TO-RIGHT EMBEDDING\nLEFT‑TO‑RIGHT ISOLATE\nLEFT-TO-RIGHT MARK\nLEFT-TO-RIGHT OVERRIDE\nPOP DIRECTIONAL FORMATTING\nPOP DIRECTIONAL ISOLATE\nRIGHT-TO-LEFT EMBEDDING\nRIGHT‑TO‑LEFT ISOLATE\nRIGHT-TO-LEFT MARK\nRIGHT-TO-LEFT OVERRIDE\nErrors that can occur on Level creation or mutation\nEmbedding Level\nDuring explicit level resolution, embedding level can go …\nDuring implicit level resolution, embedding level can go …\nOut-of-range (invalid) embedding level number.\nGenerate a character type based on a level (as specified …\nCreate level by number\nReturns the argument unchanged.\nReturns the argument unchanged.\nConverts a byte slice to a slice of Levels\nIf levels has any RTL (odd) level\nConvert to the level number\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nIf this level is left-to-right.\nIf this level is right-to-left.\nLower level by <code>amount</code>, fail if number goes below zero.\nNew LTR level with smallest number value (0).\nMaximum depth of the directional status stack during …\nMaximum depth of the directional status stack during …\nCreate new level, fail if number is larger than …\nCreate new level, fail if number is larger than <code>max_depth</code>.\nThe next LTR (even) level greater than this, or fail if …\nThe next RTL (odd) level greater than this, or fail if …\nThe lowest RTL (odd) level greater than or equal to this, …\nThe level number.\nRaise level by <code>amount</code>, fail if number is larger than …\nRaise level by <code>amount</code>, fail if number is larger than …\nNew RTL level with smallest number value (1).\nBidi information of the text (UTF-16 version).\nInitial bidi information of the text (UTF-16 version).\nContains a reference of <code>BidiInfo</code> and one of its <code>paragraphs</code>.\nBidi information of text treated as a single paragraph.\nIterator over UTF-16 text in a u16 slice, returning …\nIterator over UTF-16 text in a u16 slice, returning …\nIterator over UTF-16 text in a u16 slice, returning …\nReturn the paragraph’s Direction (Ltr, Rtl, or Mixed) …\nReturns if the paragraph is Left direction, right …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nIf processed text has any computed RTL levels\nIf processed text has any computed RTL levels\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nWhether the paragraph is purely LTR.\nReturns the <code>Level</code> of a certain character in the paragraph.\nThe directional embedding level of each byte in the text.\nThe directional embedding level of each byte in the text.\nFind the paragraphs and BidiClasses in a string of text.\nSplit the text into paragraphs and determine the bidi …\nDetermine the bidi embedding level.\nFind the paragraphs and BidiClasses in a string of text, …\nSplit the text into paragraphs and determine the bidi …\nDetermine the bidi embedding level, with a custom …\nThe BidiClass of the character at each code unit in the …\nThe BidiClass of the character at each byte in the text.\nThe BidiClass of the character at each byte in the text.\nThe paragraph embedding level.\nThe boundaries and level of each paragraph within the text.\nThe boundaries and paragraph embedding level of each …\nRe-order a line based on resolved levels and return the …\nRe-order a line based on resolved levels and return the …\nReorders pre-calculated levels of a sequence of characters.\nReorders pre-calculated levels of a sequence of characters.\nProduce the levels for this paragraph as needed for …\nProduce the levels for this paragraph as needed for …\nProduce the levels for this paragraph as needed for …\nProduce the levels for this paragraph as needed for …\nThe text\nThe text\nThe text\nFind the level runs within a line and return them in …\nFind the level runs within a line and return them in …")