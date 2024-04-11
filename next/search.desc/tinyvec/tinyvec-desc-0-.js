searchState.loadedDescShard("tinyvec", 0, "<code>tinyvec</code> provides 100% safe vec-like data structures.\nA trait for types that are an array.\nAn array-backed, vector-like data structure.\nDraining iterator for <code>ArrayVec</code>\nIterator for consuming an <code>ArrayVec</code> and returning owned …\nSplicing iterator for <code>ArrayVec</code> See <code>ArrayVec::splice</code>\nThe number of slots in the thing.\nThe type of the items in the thing.\nA slice-backed vector-like data structure.\nDraining iterator for <code>SliceVec</code>\nA vector that starts inline, but can automatically move to …\nDraining iterator for <code>TinyVecDrain</code>\nIterator for consuming an <code>TinyVec</code> and returning owned …\nSplicing iterator for <code>TinyVec</code> See <code>TinyVec::splice</code>\nThe error type returned when a conversion from a slice to …\nMove all values from <code>other</code> into this vec.\nMove all values from <code>other</code> into this vec.\nHelper to make an <code>ArrayVec</code>.\nHelper to make an <code>ArrayVec</code>.\nA <code>*mut</code> pointer to the backing array.\nA <code>*mut</code> pointer to the backing slice.\nA mutable pointer to the backing array.\nPerforms a <code>deref_mut</code>, into unique slice form.\nPerforms a <code>deref_mut</code>, into unique slice form.\nHelper for getting the mut slice.\nA <code>*const</code> pointer to the backing array.\nA <code>*const</code> pointer to the backing slice.\nA const pointer to the backing array.\nGives a shared slice over the whole thing.\nPerforms a <code>deref</code>, into shared slice form.\nReturns the remaining items of this iterator as a slice.\nPerforms a <code>deref</code>, into shared slice form.\nHelper for getting the shared slice.\nReturns the remaining items of this iterator as a slice.\nGives a unique slice over the whole thing.\nThe capacity of the <code>ArrayVec</code>.\nThe capacity of the <code>SliceVec</code>.\nThe capacity of the <code>TinyVec</code>.\nTruncates the <code>ArrayVec</code> down to length 0.\nTruncates the <code>SliceVec</code> down to length 0.\nRemoves all elements from the vec.\nCreate a default-initialized instance of ourself, similar …\nCreates a draining iterator that removes the specified …\nCreates a draining iterator that removes the specified …\nCreates a draining iterator that removes the specified …\nDrains all elements to a Vec\nDrains all elements to a Vec, but reserves additional space\nClone each element of the slice into this <code>ArrayVec</code>.\nClone each element of the slice into this vec.\nFill the vector until its capacity has been reached.\nFill the vector until its capacity has been reached.\nReturns the argument unchanged.\nThe output has a length equal to the full array.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nUses the full slice as the initial length.\nCalls <code>AsRef::as_mut</code> then uses the full slice as the …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nWraps up an array as a new empty <code>ArrayVec</code>.\nWraps up an array and uses the given length as the initial …\nWraps up an array and uses the given length as the initial …\nWraps up a slice and uses the given length as the initial …\nInserts an item at the position given, moving all …\nInserts an item at the position given, moving all …\nInserts an item at the position given, moving all …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the inner array of the <code>ArrayVec</code>.\nChecks if the length is 0.\nChecks if the length is 0.\nIf the vec is empty.\nReturns whether elements are on heap\nReturns whether elements are on stack\nThe length of the <code>ArrayVec</code> (in elements).\nThe length of the <code>SliceVec</code> (in elements).\nThe length of the vec (in elements).\nMoves the content of the TinyVec to the heap, if it’s …\nIf TinyVec is inline, moves the content of it to the heap. …\nMakes a new, empty <code>ArrayVec</code>.\nMakes a new, empty vec.\nRemove and return the last element of the vec, if there is …\nRemove and return the last element of the vec, if there is …\nRemove and return the last element of the vec, if there is …\nPlace an element onto the end of the vec.\nPlace an element onto the end of the vec.\nPlace an element onto the end of the vec.\nRemoves the item at <code>index</code>, shifting all others down by one …\nRemoves the item at <code>index</code>, shifting all others down by one …\nRemoves the item at <code>index</code>, shifting all others down by one …\nReserves additional space. Moves to the heap if array can…\nReserves additional space. Moves to the heap if array can…\nAs <code>resize_with</code> and it clones the value as the closure.\nAs <code>resize_with</code> and it clones the value as the closure.\nResize the vec to the new length.\nResize the vec to the new length.\nResize the vec to the new length.\nResize the vec to the new length.\nWalk the vec and keep only the elements that pass the …\nWalk the vec and keep only the elements that pass the …\nWalk the vec and keep only the elements that pass the …\nForces the length of the vector to <code>new_len</code>.\nForces the length of the vector to <code>new_len</code>.\nShrinks the capacity of the vector as much as possible. It …\nCreates a splicing iterator that removes the specified …\nCreates a splicing iterator that removes the specified …\nSplits the collection at the point given.\nSplits the collection at the point given.\nSplits the collection at the point given.\nRemove an element, swapping the end of the vec into its …\nRemove an element, swapping the end of the vec into its …\nRemove an element, swapping the end of the vec into its …\nHelper to make a <code>TinyVec</code>.\nHelper to make a <code>TinyVec</code>.\nReduces the vec’s length to the given value.\nReduces the vec’s length to the given value.\nReduces the vec’s length to the given value.\nMove all values from <code>other</code> into this vec. If appending …\nThe output has a length equal to that of the slice, with …\nWraps an array, using the given length as the starting …\nWraps an array, using the given length as the starting …\nWraps a slice, using the given length as the starting …\nTries to insert an item at the position given, moving all …\nTries to place an element onto the end of the vec. Returns …\nMakes a new TinyVec with <em>at least</em> the given capacity.")