searchState.loadedDescShard("tracing_core", 0, "Core primitives for <code>tracing</code>.\nTrait implemented by callsites.\n<code>Dispatch</code> trace data to a <code>Subscriber</code>.\n<code>Event</code>s represent single points in time where something …\nAn opaque key allowing <em>O</em>(1) access to a field in a <code>Span</code>’…\nDescribes the level of verbosity of a span or event.\nA filter comparable to a verbosity <code>Level</code>.\nMetadata describing a span or event.\nA synchronization primitive which can be used to run a …\nTrait representing the functions required to collect trace …\nPerforms an initialization routine once and only once. The …\nPerforms the same function as <code>call_once()</code> except ignores …\nCallsites represent the source locations from which spans …\nNotifies the subscriber that a span ID has been cloned.\nReturns a type representing this subscriber’s view of …\nReturns the current default dispatcher\nDispatches trace events to <code>Subscriber</code>s.\nIf <code>self</code> is the same type as the provided <code>TypeId</code>, returns …\n<strong>This method is deprecated.</strong>\nReturns true if a span or event with the specified metadata…\nRecords that a span has been entered.\nEvents represent single points in time during the …\nRecords that an <code>Event</code> has occurred.\nDetermine if an <code>Event</code> should be recorded.\nRecords that a span has been exited.\n<code>Span</code> and <code>Event</code> key-value data.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nStatically constructs an <code>Identifier</code> for the provided …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns <code>true</code> if some <code>call_once()</code> call has completed …\nReturns the highest verbosity level that this <code>Subscriber</code> …\nMetadata describing trace data.\nReturns the metadata associated with the callsite.\nStatically constructs new span metadata.\nCreates a new <code>Once</code> value.\nVisit the construction of a new span, returning a new span …\nInvoked when this subscriber becomes a <code>Dispatch</code>.\nRecord a set of values on a span.\nAdds an indication that <code>span</code> follows from the span with …\nRegisters a new callsite with this subscriber, returning …\nSets the <code>Interest</code> for this callsite.\nSpans represent periods of time in the execution of a …\nCollectors collect and record trace data.\nNotifies the subscriber that a span ID has been dropped, …\nTrait implemented by callsites.\nA default <code>Callsite</code> implementation.\nUniquely identifies a <code>Callsite</code>\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the callsite’s cached <code>Interest</code>, or registers it …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the metadata associated with the callsite.\nReturns a new <code>DefaultCallsite</code> with the specified <code>Metadata</code>.\nClear and reregister interest on every <code>Callsite</code>\nRegister a new <code>Callsite</code> with the global registry.\nRegisters this callsite with the global callsite registry.\nSets the <code>Interest</code> for this callsite.\nA guard that resets the current default dispatcher to the …\n<code>Dispatch</code> trace data to a <code>Subscriber</code>.\nReturned if setting the global dispatcher fails.\n<code>WeakDispatch</code> is a version of <code>Dispatch</code> that holds a …\nNotifies the subscriber that a span ID has been cloned.\nReturns a type representing this subscriber’s view of …\nReturns some reference to the <code>Subscriber</code> this <code>Dispatch</code> …\nCreates a <code>WeakDispatch</code> from this <code>Dispatch</code>.\nNotifies the subscriber that a span ID has been dropped.\nReturns true if a span with the specified metadata would be\nRecords that a span has been can_enter.\nRecords that an <code>Event</code> has occurred.\nRecords that a span has been exited.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nExecutes a closure with a reference to this thread’s …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns <code>true</code> if this <code>Dispatch</code> forwards to a <code>Subscriber</code> of …\nReturns a <code>Dispatch</code> that forwards to the given <code>Subscriber</code>.\nRecord the construction of a new span, returning a new ID …\nReturns a new <code>Dispatch</code> that discards events and spans.\nRecord a set of values on a span.\nAdds an indication that <code>span</code> follows from the span with …\nRegisters a new callsite with this subscriber, returning …\nSets the dispatch as the default dispatch for the duration …\nSets this dispatch as the global default for the duration …\nNotifies the subscriber that a span ID has been dropped, …\nAttempts to upgrade this <code>WeakDispatch</code> to a <code>Dispatch</code>.\nSets this dispatch as the default for the duration of a …\n<code>Event</code>s represent single points in time where something …\nConstructs a new <code>Event</code> with the specified metadata and set …\nConstructs a new <code>Event</code> with the specified metadata and set …\nReturns an iterator over the set of values on this <code>Event</code>.\nReturns true if the new event’s parent should be …\nReturns true if the new event should be a root.\nReturns metadata describing this <code>Event</code>.\nReturns a new <code>Event</code> in the current span, with the …\nReturns a new <code>Event</code> as a child of the specified span, with …\nReturns the new event’s explicitly-specified parent, if …\nVisits all the fields on this <code>Event</code> with the specified …\nA <code>Value</code> which serializes as a string using <code>fmt::Debug</code>.\nA <code>Value</code> which serializes using <code>fmt::Display</code>.\nAn empty field.\nAn opaque key allowing <em>O</em>(1) access to a field in a <code>Span</code>’…\nDescribes the fields present on a span.\nAn iterator over a set of fields.\nA field value of an erased type.\nA set of fields and values for a span.\nVisits typed values.\nReturns an <code>Identifier</code> that uniquely identifies the <code>Callsite</code>\nReturns an <code>Identifier</code> that uniquely identifies the <code>Callsite</code>\nReturns <code>true</code> if <code>self</code> contains the given <code>field</code>.\nWraps a type implementing <code>fmt::Debug</code> as a <code>Value</code> that can be\nWraps a type implementing <code>fmt::Display</code> as a <code>Value</code> that can …\nReturns the <code>Field</code> named <code>name</code>, or <code>None</code> if no such field …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns whether or not this <code>FieldSet</code> has fields.\nReturns true if this <code>ValueSet</code> contains <em>no</em> values.\nReturns an iterator over the <code>Field</code>s in this <code>FieldSet</code>.\nReturns the number of fields in this <code>FieldSet</code>.\nReturns the number of fields in this <code>ValueSet</code> that would …\nReturns a string representing the name of the field.\nConstructs a new <code>FieldSet</code> with the given array of field …\nVisits this value with the given <code>Visitor</code>.\nVisits all the fields in this <code>ValueSet</code> with the provided …\nVisit a boolean value.\nVisit a value implementing <code>fmt::Debug</code>.\nRecords a type implementing <code>Error</code>.\nVisit a double-precision floating point value.\nVisit a signed 128-bit integer value.\nVisit a signed 64-bit integer value.\nVisit a string value.\nVisit an unsigned 128-bit integer value.\nVisit an unsigned 64-bit integer value.\nThe “debug” level.\nThe “debug” level.\nThe “error” level.\nThe “error” level.\n<code>Event</code> callsite\n<code>enabled!</code> callsite. <code>Subscriber</code>s can assume this <code>Kind</code> means …\nThe “info” level.\nThe “info” level.\nIndicates whether the callsite is a span or event.\nDescribes the level of verbosity of a span or event.\nA filter comparable to a verbosity <code>Level</code>.\nMetadata describing a span or event.\nThe “off” level.\nReturned if parsing a <code>Level</code> fails.\nIndicates that a string could not be parsed to a valid …\n<code>Span</code> callsite\nThe “trace” level.\nThe “trace” level.\nThe “warn” level.\nThe “warn” level.\nReturns the string representation of the <code>Level</code>.\nReturns an opaque <code>Identifier</code> that uniquely identifies the …\nReturns a <code>LevelFilter</code> that matches the most verbose <code>Level</code> …\nReturns the names of the fields on the described span or …\nReturns the name of the source code file where the span …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns a <code>LevelFilter</code> that enables spans and events with …\nSets that this <code>Kind</code> is a hint.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the most verbose <code>Level</code> that this filter accepts, …\nReturns true if the callsite kind is <code>Event</code>.\nReturn true if the callsite kind is <code>Event</code>\nReturn true if the callsite kind is <code>Hint</code>\nReturn true if the callsite kind is <code>Span</code>.\nReturn true if the callsite kind is <code>Span</code>\nReturns the level of verbosity of the described span or …\nReturns the line number in the source code file where the …\nReturns the path to the Rust module where the span …\nReturns the name of the span.\nConstruct new metadata for a span or event, with a name, …\nReturns a string describing the part of the system where …\nAttributes provided to a <code>Subscriber</code> describing a new span …\nIndicates what the <code>Subscriber</code> considers the “current” …\nIdentifies a span within the context of a subscriber.\nA set of fields recorded by a span.\nReturns <code>Attributes</code> describing a new child span of the …\nReturns <code>true</code> if this set of <code>Attributes</code> contains a value …\nReturns <code>true</code> if this <code>Record</code> contains a value for the given …\nReturns the set of all fields defined by this span’s …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConstructs a new span ID from the given <code>NonZeroU64</code>.\nConstructs a new span ID from the given <code>u64</code>.\nBorrows the <code>Id</code> of the current span, if one exists and is …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConsumes <code>self</code> and returns the span <code>Id</code> and <code>Metadata</code> of the …\nReturns the span’s ID as a <code>NonZeroU64</code>.\nReturns the span’s ID as a <code>u64</code>.\nReturns true if the new span’s parent should be …\nReturns true if this set of <code>Attributes</code> contains <em>no</em> values.\nReturns true if this <code>Record</code> contains <em>no</em> values.\nReturns <code>true</code> if the <code>Subscriber</code> that constructed this …\nReturns true if the new span should be a root.\nReturns the number of fields that would be visited from …\nReturns a reference to the new span’s metadata.\nBorrows the <code>Metadata</code> of the current span, if one exists …\nReturns <code>Attributes</code> describing a new child span of the …\nConstructs a new <code>Record</code> from a <code>ValueSet</code>.\nConstructs a new <code>Current</code> that indicates the current …\nReturns <code>Attributes</code> describing a new span at the root of …\nConstructs a new <code>Current</code> that indicates the current …\nReturns the new span’s explicitly-specified parent, if …\nRecords all the fields in this set of <code>Attributes</code> with the …\nRecords all the fields in this <code>Record</code> with the provided …\nReturns a reference to a <code>ValueSet</code> containing any values …\nIndicates a <code>Subscriber</code>’s interest in a particular …\nA no-op <code>Subscriber</code>.\nTrait representing the functions required to collect trace …\nReturns an <code>Interest</code> indicating the subscriber is always …\nNotifies the subscriber that a span ID has been cloned.\nReturns a type representing this subscriber’s view of …\nIf <code>self</code> is the same type as the provided <code>TypeId</code>, returns …\nReturns some reference to this <code>Subscriber</code> value if it is …\nReturns some reference to this <code>[</code>Subscriber…\nReturns some reference to this <code>Subscriber</code> value if it is …\nReturns some reference to this <code>Subscriber</code> value if it is …\n<strong>This method is deprecated.</strong>\nReturns true if a span or event with the specified metadata…\nRecords that a span has been entered.\nRecords that an <code>Event</code> has occurred.\nDetermine if an <code>Event</code> should be recorded.\nRecords that a span has been exited.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns <code>true</code> if this <code>Subscriber</code> is the same type as <code>T</code>.\nReturns <code>true</code> if this <code>Subscriber</code> is the same type as <code>T</code>.\nReturns <code>true</code> if this <code>Subscriber</code> is the same type as <code>T</code>.\nReturns <code>true</code> if this <code>Subscriber</code> is the same type as <code>T</code>.\nReturns <code>true</code> if the subscriber is always interested in …\nReturns <code>true</code> if the subscriber is never interested in …\nReturns <code>true</code> if the subscriber is sometimes interested in …\nReturns the highest verbosity level that this <code>Subscriber</code> …\nReturns an <code>Interest</code> indicating that the subscriber is …\nReturns a new <code>NoSubscriber</code>.\nVisit the construction of a new span, returning a new span …\nInvoked when this subscriber becomes a <code>Dispatch</code>.\nRecord a set of values on a span.\nAdds an indication that <code>span</code> follows from the span with …\nRegisters a new callsite with this subscriber, returning …\nReturns an <code>Interest</code> indicating the subscriber is sometimes …\nNotifies the subscriber that a span ID has been dropped, …")