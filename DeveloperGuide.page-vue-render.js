
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"sticky":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/tp/index.html","title":"Home"}},[_v("CulinaryContacts")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/tp/index.html"}},[_v("Home")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/tp/UserGuide.html"}},[_v("User Guide")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/tp/DeveloperGuide.html"}},[_v("Developer Guide")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/tp/AboutUs.html"}},[_v("About Us")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/se-edu/addressbook-level3","target":"_blank"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])])],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('div',{attrs:{"id":"content-wrapper"}},[_m(0),_v(" "),_c('div',{pre:true,attrs:{"class":"page-nav-print d-none d-print-block"}}),_v(" "),_c('hr'),_v(" "),_m(1),_v(" "),_m(2),_v(" "),_c('hr'),_v(" "),_m(3),_v(" "),_m(4),_v(" "),_c('hr'),_v(" "),_m(5),_v(" "),_m(6),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/ArchitectureDiagram.png","width":"280"}}),_v(" "),_c('p',[_v("The architecture diagram given above explains the high-level design of the App.")]),_v(" "),_c('p',[_v("Given below is a quick overview of main components and how they interact with each other.")]),_v(" "),_m(7),_v(" "),_m(8),_v(" "),_m(9),_v(" "),_c('p',[_v("The bulk of the app's work is done by the following four components:")]),_v(" "),_m(10),_v(" "),_m(11),_v(" "),_m(12),_v(" "),_m(13),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/ArchitectureSequenceDiagram.png","width":"574"}}),_v(" "),_c('p',[_v("Each of the four main components (also shown in the diagram above),")]),_v(" "),_m(14),_v(" "),_m(15),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/ComponentManagers.png","width":"300"}}),_v(" "),_c('p',[_v("The sections below give more details of each component.")]),_v(" "),_m(16),_v(" "),_m(17),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/UiClassDiagram.png","alt":"Structure of the UI Component"}}),_v(" "),_m(18),_v(" "),_m(19),_v(" "),_m(20),_v(" "),_m(21),_v(" "),_m(22),_v(" "),_m(23),_v(" "),_m(24),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/LogicClassDiagram.png","width":"550"}}),_v(" "),_m(25),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/DeleteSequenceDiagram.png","alt":"Interactions Inside the Logic Component for the `delete 1` Command"}}),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_c('strong',[_v("Note:")]),_v(" The lifeline for "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("DeleteCommandParser")]),_v(" should end at the destroy marker (X) but due to a limitation of PlantUML, the lifeline continues till the end of diagram.")])]),_v(" "),_m(26),_v(" "),_m(27),_v(" "),_m(28),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/ParserClasses.png","width":"600"}}),_v(" "),_c('p',[_v("How the parsing works:")]),_v(" "),_m(29),_v(" "),_m(30),_v(" "),_m(31),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/ModelClassDiagram.png","width":"450"}}),_v(" "),_m(32),_v(" "),_m(33),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_c('strong',[_v("Note:")]),_v(" An alternative (arguably, a more OOP) model is given below. It has a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Tag")]),_v(" list in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddressBook")]),_v(", which "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Person")]),_v(" references. This allows "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddressBook")]),_v(" to only require one "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Tag")]),_v(" object per unique tag, instead of each "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Person")]),_v(" needing their own "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Tag")]),_v(" objects."),_c('br')]),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/BetterModelClassDiagram.png","width":"450"}})],1),_v(" "),_m(34),_v(" "),_m(35),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/StorageClassDiagram.png","width":"550"}}),_v(" "),_m(36),_v(" "),_m(37),_v(" "),_m(38),_v(" "),_m(39),_v(" "),_c('hr'),_v(" "),_m(40),_v(" "),_c('p',[_v("This section describes some noteworthy details on how certain features are implemented.")]),_v(" "),_m(41),_v(" "),_m(42),_v(" "),_m(43),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/HelpActivityDiagram.png","alt":"HelpActivityDiagram"}}),_v(" "),_m(44),_v(" "),_c('p',[_v("Step 1. The user launches the application. The user will see the main window of the address book.")]),_v(" "),_m(45),_v(" "),_c('p',[_v("Step 3. The user looks through the command summary table to find the information needed.")]),_v(" "),_m(46),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_c('strong',[_v("Note")]),_v(" The user can do this anytime as long as the help window is opened.")])]),_v(" "),_m(47),_v(" "),_m(48),_v(" "),_m(49),_v(" "),_m(50),_v(" "),_m(51),_v(" "),_m(52),_v(" "),_m(53),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/FilterCommandClass.png","alt":"FilterClassDiagram"}}),_v(" "),_m(54),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/FilterSequenceDiagram-Logic.png","alt":"FilterSequenceDiagram"}}),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_c('strong',[_v("Note:")]),_v(" The lifeline for "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("FilterCommandParser")]),_v(" should end at the destroy marker (X) but due to a limitation of PlantUML, the lifeline continues till the end of diagram.")])]),_v(" "),_m(55),_v(" "),_m(56),_v(" "),_m(57),_v(" "),_m(58),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/ClearCommandActivityDiagram.png","alt":"ClearCommandActivityDiagram"}}),_v(" "),_m(59),_v(" "),_m(60),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/ArchiveCommandObjectDiagram0.png","alt":"ArchiveCommandObjectDiagram0"}}),_v(" "),_m(61),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/ArchiveCommandObjectDiagram1.png","alt":"ArchiveCommandObjectDiagram1"}}),_v(" "),_m(62),_v(" "),_m(63),_v(" "),_m(64),_v(" "),_m(65),_v(" "),_c('hr'),_v(" "),_m(66),_v(" "),_m(67),_v(" "),_c('hr'),_v(" "),_m(68),_v(" "),_m(69),_v(" "),_m(70),_v(" "),_m(71),_v(" "),_m(72),_v(" "),_m(73),_v(" "),_m(74),_v(" "),_m(75),_m(76),_v(" "),_m(77),_v(" "),_m(78),_v(" "),_m(79),_v(" "),_m(80),_v(" "),_m(81),_v(" "),_m(82),_v(" "),_m(83),_v(" "),_m(84),_v(" "),_m(85),_v(" "),_m(86),_v(" "),_m(87),_v(" "),_m(88),_v(" "),_m(89),_v(" "),_m(90),_v(" "),_m(91),_v(" "),_m(92),_v(" "),_m(93),_v(" "),_m(94),_v(" "),_m(95),_v(" "),_m(96),_v(" "),_m(97),_v(" "),_m(98),_v(" "),_m(99),_v(" "),_m(100),_v(" "),_m(101),_v(" "),_m(102),_v(" "),_m(103),_v(" "),_m(104),_v(" "),_m(105),_v(" "),_m(106),_v(" "),_m(107),_v(" "),_m(108),_v(" "),_m(109),_v(" "),_m(110),_v(" "),_m(111),_v(" "),_m(112),_v(" "),_m(113),_v(" "),_m(114),_v(" "),_m(115),_v(" "),_m(116),_v(" "),_m(117),_v(" "),_m(118),_v(" "),_m(119),_v(" "),_m(120),_v(" "),_m(121),_v(" "),_m(122),_v(" "),_m(123),_v(" "),_m(124),_v(" "),_m(125),_v(" "),_m(126),_v(" "),_m(127),_v(" "),_m(128),_v(" "),_m(129),_v(" "),_m(130),_v(" "),_m(131),_v(" "),_m(132),_v(" "),_m(133),_v(" "),_m(134),_v(" "),_m(135),_v(" "),_m(136),_v(" "),_m(137),_v(" "),_m(138),_v(" "),_m(139),_v(" "),_m(140),_v(" "),_m(141),_v(" "),_m(142),_v(" "),_m(143),_v(" "),_m(144),_v(" "),_m(145),_v(" "),_m(146),_v(" "),_c('hr'),_v(" "),_m(147),_v(" "),_c('p',[_v("Given below are instructions to test the app manually.")]),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_c('strong',[_v("Note:")]),_v(" These instructions only provide a starting point for testers to work on;\ntesters are expected to do more "),_c('em',[_v("exploratory")]),_v(" testing.")])]),_v(" "),_m(148),_v(" "),_m(149),_v(" "),_m(150),_v(" "),_m(151),_v(" "),_m(152),_v(" "),_m(153),_v(" "),_m(154),_v(" "),_m(155),_v(" "),_m(156),_v(" "),_m(157),_v(" "),_m(158),_v(" "),_m(159),_v(" "),_m(160),_v(" "),_m(161),_v(" "),_m(162),_v(" "),_m(163),_v(" "),_m(164),_v(" "),_m(165),_v(" "),_m(166),_v(" "),_m(167),_v(" "),_c('hr'),_v(" "),_m(168),_v(" "),_c('p',[_v("Team size: 4")]),_v(" "),_m(169)],1),_v(" "),_c('overlay-source',{attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"},[_c('overlay-source',{staticClass:"nav nav-pills flex-column my-0 small no-flex-wrap",attrs:{"id":"mb-page-nav","tag-name":"nav","to":"mb-page-nav"}},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#culinarycontacts-developer-guide"}},[_v("CulinaryContacts Developer Guide‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#acknowledgements"}},[_v("Acknowledgements‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#setting-up-getting-started"}},[_v("Setting up, getting started‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#design"}},[_v("Design‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#architecture"}},[_v("Architecture‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#ui-component"}},[_v("UI component‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#logic-component"}},[_v("Logic component‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#model-component"}},[_v("Model component‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#storage-component"}},[_v("Storage component‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#common-classes"}},[_v("Common classes‎")])]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#implementation"}},[_v("Implementation‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#help-command"}},[_v("Help Command‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#filter-command"}},[_v("Filter command‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#clear-command"}},[_v("Clear command‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#archive-command"}},[_v("Archive command‎")])]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#documentation-logging-testing-configuration-dev-ops"}},[_v("Documentation, logging, testing, configuration, dev-ops‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#appendix-requirements"}},[_v("Appendix: Requirements‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#product-scope"}},[_v("Product scope‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#user-stories"}},[_v("User stories‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#use-cases"}},[_v("Use cases‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#non-functional-requirements"}},[_v("Non-Functional Requirements‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#glossary"}},[_v("Glossary‎")])]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#appendix-instructions-for-manual-testing"}},[_v("Appendix: Instructions for manual testing‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#launch-and-shutdown"}},[_v("Launch and shutdown‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#listing-all-persons-in-contacts-list"}},[_v("Listing all persons in contacts list‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#listing-all-persons-in-archived-list"}},[_v("Listing all persons in archived list‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#clearing-all-entries"}},[_v("Clearing all entries‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#viewing-help"}},[_v("Viewing help‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#archiving-a-person"}},[_v("Archiving a person‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#unarchiving-a-person"}},[_v("Unarchiving a person‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#adding-a-new-reservation"}},[_v("Adding a new reservation‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#deleting-a-new-reservation"}},[_v("Deleting a new reservation‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#sorting-reservations"}},[_v("Sorting reservations‎")])]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#appendix-planned-enhancements"}},[_v("Appendix: Planned Enhancements‎")])])])],1)]),_v(" "),_c('scroll-top-button')],1),_v(" "),_m(170)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"culinarycontacts-developer-guide"}},[_v("CulinaryContacts Developer Guide"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#culinarycontacts-developer-guide","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"acknowledgements"}},[_c('strong',[_v("Acknowledgements")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#acknowledgements","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("UI Rendering: "),_c('a',{attrs:{"href":"https://openjfx.io/"}},[_v("JavaFX")])]),_v(" "),_c('li',[_v("Testing Framework: "),_c('a',{attrs:{"href":"https://github.com/junit-team/junit5"}},[_v("JUnit5")])]),_v(" "),_c('li',[_v("JSON Data Management: "),_c('a',{attrs:{"href":"https://github.com/FasterXML/jackson"}},[_v("Jackson")])]),_v(" "),_c('li',[_v("Base UI Framework: "),_c('a',{attrs:{"href":"https://se-education.org/addressbook-level3/"}},[_v("AddressBook Level-3")])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"setting-up-getting-started"}},[_c('strong',[_v("Setting up, getting started")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#setting-up-getting-started","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Refer to the guide "),_c('a',{attrs:{"href":"/tp/SettingUp.html"}},[_v("Setting up and getting started")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"design"}},[_c('strong',[_v("Design")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#design","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"architecture"}},[_v("Architecture"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#architecture","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Main components of the architecture")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Main")])]),_v(" (consisting of classes "),_c('a',{attrs:{"href":"https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/Main.java"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Main")])]),_v(" and "),_c('a',{attrs:{"href":"https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/MainApp.java"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MainApp")])]),_v(") is in charge of the app launch and shut down.")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("At app launch, it initializes the other components in the correct sequence, and connects them up with each other.")]),_v(" "),_c('li',[_v("At shut down, it shuts down the other components and invokes cleanup methods where necessary.")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('a',{attrs:{"href":"#ui-component"}},[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UI")])])]),_v(": The UI of the App.")]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#logic-component"}},[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")])])]),_v(": The command executor.")]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#model-component"}},[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")])])]),_v(": Holds the data of the App in memory.")]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#storage-component"}},[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Storage")])])]),_v(": Reads data from, and writes data to, the hard disk.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"#common-classes"}},[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Commons")])])]),_v(" represents a collection of classes used by multiple other components.")])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("How the architecture components interact with each other")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("The sequence diagram below shows how the components interact with each other for the scenario where the user issues the command "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete 1")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("defines its "),_c('em',[_v("API")]),_v(" in an "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("interface")]),_v(" with the same name as the Component.")]),_v(" "),_c('li',[_v("implements its functionality using a concrete "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("{Component Name}Manager")]),_v(" class (which follows the corresponding API "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("interface")]),_v(" mentioned in the previous point.")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("For example, the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component defines its API in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic.java")]),_v(" interface and implements its functionality using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("LogicManager.java")]),_v(" class which follows the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" interface. Other components interact with a given component through its interface rather than the concrete class (reason: to prevent outside component's being coupled to the implementation of a component), as illustrated in the (partial) class diagram below.")])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"ui-component"}},[_v("UI component"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#ui-component","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('strong',[_v("API")]),_v(" of this component is specified in "),_c('a',{attrs:{"href":"https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/ui/Ui.java"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Ui.java")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("The UI consists of a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MainWindow")]),_v(" that is made up of parts e.g."),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("CommandBox")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ResultDisplay")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("PersonListPanel")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("StatusBarFooter")]),_v(" etc. All these, including the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MainWindow")]),_v(", inherit from the abstract "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UiPart")]),_v(" class which captures the commonalities between classes that represent parts of the visible GUI.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UI")]),_v(" component uses the JavaFx UI framework. The layout of these UI parts are defined in matching "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".fxml")]),_v(" files that are in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("src/main/resources/view")]),_v(" folder. For example, the layout of the "),_c('a',{attrs:{"href":"https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/ui/MainWindow.java"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MainWindow")])]),_v(" is specified in "),_c('a',{attrs:{"href":"https://github.com/se-edu/addressbook-level3/tree/master/src/main/resources/view/MainWindow.fxml"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MainWindow.fxml")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UI")]),_v(" component,")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("executes user commands using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component.")]),_v(" "),_c('li',[_v("listens for changes to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" data so that the UI can be updated with the modified data.")]),_v(" "),_c('li',[_v("keeps a reference to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component, because the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UI")]),_v(" relies on the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" to execute commands.")]),_v(" "),_c('li',[_v("depends on some classes in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" component, as it displays "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Person")]),_v(" object residing in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"logic-component"}},[_v("Logic component"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#logic-component","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("API")]),_v(" : "),_c('a',{attrs:{"href":"https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/logic/Logic.java"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic.java")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Here's a (partial) class diagram of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component:")])}
},function anonymous(
) {
with(this){return _c('p',[_v("The sequence diagram below illustrates the interactions within the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component, taking "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("execute(\"delete 1\")")]),_v(" API call as an example.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("How the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component works:")])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("When "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" is called upon to execute a command, it is passed to an "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddressBookParser")]),_v(" object which in turn creates a parser that matches the command (e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("DeleteCommandParser")]),_v(") and uses it to parse the command.")]),_v(" "),_c('li',[_v("This results in a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Command")]),_v(" object (more precisely, an object of one of its subclasses e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("DeleteCommand")]),_v(") which is executed by the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("LogicManager")]),_v(".")]),_v(" "),_c('li',[_v("The command can communicate with the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" when it is executed (e.g. to delete a person)."),_c('br'),_v("\nNote that although this is shown as a single step in the diagram above (for simplicity), in the code it can take several interactions (between the command object and the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(") to achieve.")]),_v(" "),_c('li',[_v("The result of the command execution is encapsulated as a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("CommandResult")]),_v(" object which is returned back from "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Here are the other classes in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" (omitted from the class diagram above) that are used for parsing a user command:")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("When called upon to parse a user command, the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddressBookParser")]),_v(" class creates an "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("XYZCommandParser")]),_v(" ("),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("XYZ")]),_v(" is a placeholder for the specific command name e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddCommandParser")]),_v(") which uses the other classes shown above to parse the user command and create a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("XYZCommand")]),_v(" object (e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddCommand")]),_v(") which the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddressBookParser")]),_v(" returns back as a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Command")]),_v(" object.")]),_v(" "),_c('li',[_v("All "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("XYZCommandParser")]),_v(" classes (e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddCommandParser")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("DeleteCommandParser")]),_v(", ...) inherit from the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Parser")]),_v(" interface so that they can be treated similarly where possible e.g, during testing.")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"model-component"}},[_v("Model component"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#model-component","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("API")]),_v(" : "),_c('a',{attrs:{"href":"https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/model/Model.java"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model.java")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" component,")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("stores the address book data i.e., all "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Person")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Reservation")]),_v(" objects (which are contained in the\n"),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UniquePersonList")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UniqueReservationList")]),_v(" objects respectively.\n"),_c('ul',[_c('li',[_v("Note that we have two "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UniquePersonList")]),_v(" objects: one called "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("persons")]),_v(" representing the contacts list and another called "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("archivedPersons")]),_v(" for the archived list.")])])]),_v(" "),_c('li',[_v("stores the currently 'selected' "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Person")]),_v(" objects (e.g., results of a search query) as a separate "),_c('em',[_v("filtered")]),_v(" list which is exposed to outsiders as an unmodifiable "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ObservableList<Person>")]),_v(" that can be 'observed' e.g. the UI can be bound to this list so that the UI automatically updates when the data in the list change.")]),_v(" "),_c('li',[_v("stores the currently 'selected' "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Reservation")]),_v(" objects in the same fashion as 'selected' "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Person")]),_v(" objects.")]),_v(" "),_c('li',[_v("stores a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UserPref")]),_v(" object that represents the user’s preferences. This is exposed to the outside as a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ReadOnlyUserPref")]),_v(" objects.")]),_v(" "),_c('li',[_v("does not depend on any of the other three components (as the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" represents data entities of the domain, they should make sense on their own without depending on other components)")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"storage-component"}},[_v("Storage component"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#storage-component","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("API")]),_v(" : "),_c('a',{attrs:{"href":"https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/storage/Storage.java"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Storage.java")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Storage")]),_v(" component,")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("can save both address book data and user preference data in JSON format, and read them back into corresponding objects.")]),_v(" "),_c('li',[_v("inherits from both "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddressBookStorage")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UserPrefStorage")]),_v(", which means it can be treated as either one (if only the functionality of only one is needed).")]),_v(" "),_c('li',[_v("depends on some classes in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" component (because the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Storage")]),_v(" component's job is to save/retrieve objects that belong to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(")")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"common-classes"}},[_v("Common classes"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#common-classes","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Classes used by multiple components are in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("seedu.addressbook.commons")]),_v(" package.")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"implementation"}},[_c('strong',[_v("Implementation")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#implementation","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"help-command"}},[_v("Help Command"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#help-command","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("The implementation of help command is more related to the Ui part of the code compared to other commands as it opens another window to show the command summary. It is facilitated by the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("handleHelp")]),_v(" method in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MainWindow")]),_v(" class.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("The following activity diagram shows how a user views the help window with the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help")]),_v(" command.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Given below is an example usage scenario of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help")]),_v(" command.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 2. The user executes the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help")]),_v(" command to open the help window. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MainWindow#executeCommand()")]),_v(" will call "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MainWindow#isShowHelp()")]),_v(" to check if the command to be executed is a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help")]),_v(" command. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help")]),_v(" command is detected and causes "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model#handleHelp()")]),_v(" to be called which opens the help window.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 4. The user can copy the website address by clicking "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Copy URL")]),_v(" button in the help window and navigate to the website for more detailed information.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 5. The user can then click the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("X")]),_v(" on top right corner or press"),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Q")]),_v(" on keyboard to close the help window.")])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"design-considerations"}},[_v("Design considerations:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#design-considerations","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Aspect: How help window is presented:")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_c('strong',[_v("Option 1 (current choice):")]),_v(" The website address and things to note on top of a command summary table.")]),_v(" "),_c('ul',[_c('li',[_v("Pros: Useful and convenient summary for easy reference.")]),_v(" "),_c('li',[_v("Cons: May need to modify every time a new command is added.")])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Option 2:")]),_v(" Only the website address.")]),_v(" "),_c('ul',[_c('li',[_v("Pros: Easy to implement and no change needed in the future.")]),_v(" "),_c('li',[_v("Cons: Not very useful and convenient as a quick reference.")])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"filter-command"}},[_v("Filter command"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#filter-command","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("The filtering of contacts by tag is facilitated by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("HasMatchingTagPredicate")]),_v(". It implements the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Predicate<Person>")]),_v(" interface and overrides the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("test(Person)")]),_v(" method, which is used to decide which "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Person")]),_v("s will be displayed after the filter command. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("test(Person)")]),_v(" method will return true only if the person has a tag matching every filter tag.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Here is the class diagram for "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("FilterCommand")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('p',[_v("The following sequence diagram shows how a filter command goes through the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component.")])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"clear-command"}},[_v("Clear command"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#clear-command","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("To safeguard against accidentally clearing the contacts list, the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clear")]),_v(" command requires the user to input a confirmation after the initial "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clear")]),_v(" command. This is performed with the use of the two flags in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ModelManager")]),_v(" class, namely "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("isAwaitingClear")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("isConfirmClear")]),_v(", where their statuses are checked within the execution of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clear")]),_v(" command since the model is passed to the command.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Another flag, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("previouslyClear")]),_v(", is used in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("LogicManager")]),_v(" class to check if the previous command was a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clear")]),_v(" command before handling the current command entered, where it checks if a confirmation \"y\" is entered.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("The following activity diagram summarizes what happens when a user executes a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clear")]),_v(" command:")])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"archive-command"}},[_v("Archive command"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#archive-command","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("archive")]),_v(" command essentially removes the person from the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UniquePersonList persons")]),_v(" and places the person into the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UniquePersonList archivedPersons")]),_v(" in the address book, hiding the person's contact from the main list.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("In this example, Irfan was initially in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("persons")]),_v(" list, at "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("INDEX")]),_v(" 1.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("After being archived, Irfan was removed from the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("persons")]),_v(" list and added to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("archivedPersons")]),_v(" list.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("archive")]),_v(" command has its corresponding "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("unarchive")]),_v(" command which conversely removes the person from the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("archivedPersons")]),_v(" list and adds them into the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("persons")]),_v(" list inside the address book.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("There is also the associated "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("alist")]),_v(" command that displays all the contacts that have been added into the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("archivedPersons")]),_v(" list.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Archiving in CulinaryContacts has also been implemented in a way that allows for all other commands to be performed on the archived list. This was achieved by modifying the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("FilteredList<Person> filteredPersons")]),_v(" within the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ModelManager")]),_v(" class to dynamically contain either the archived persons or the normal persons. This is because many of the original commands already make use of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filteredPersons")]),_v(" list to execute the commands on. For commands that do not use the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filteredPersons")]),_v(" list in their execution, the flag "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("isViewingArchivedList")]),_v(" within the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ModelManager")]),_v(" is used instead in order to check if the user is currently viewing the normal persons or the archived persons before performing the command on the corresponding list.")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"documentation-logging-testing-configuration-dev-ops"}},[_c('strong',[_v("Documentation, logging, testing, configuration, dev-ops")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#documentation-logging-testing-configuration-dev-ops","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('a',{attrs:{"href":"/tp/Documentation.html"}},[_v("Documentation guide")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"/tp/Testing.html"}},[_v("Testing guide")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"/tp/Logging.html"}},[_v("Logging guide")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"/tp/Configuration.html"}},[_v("Configuration guide")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"/tp/DevOps.html"}},[_v("DevOps guide")])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"appendix-requirements"}},[_c('strong',[_v("Appendix: Requirements")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#appendix-requirements","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"product-scope"}},[_v("Product scope"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#product-scope","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Target user profile")]),_v(":")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("small family restaurant owners")]),_v(" "),_c('li',[_v("has a need to manage a significant number of contacts such as suppliers, employees and customers")]),_v(" "),_c('li',[_v("restaurant accepts reservations")]),_v(" "),_c('li',[_v("prefer desktop apps over other types")]),_v(" "),_c('li',[_v("can type fast")]),_v(" "),_c('li',[_v("is reasonably comfortable using CLI apps")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Value proposition")]),_v(":\nThis app offers streamlined contact and reservation management for small family-owned restaurants, enhancing operational efficiency without covering financial or inventory aspects. It also categorises and stores detailed information about suppliers and the food that they sell to help owners keep track of volatile contacts.")])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"user-stories"}},[_v("User stories"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#user-stories","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Priorities: High (must have) - "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* * *")]),_v(", Medium (nice to have) - "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")]),_v(", Low (unlikely to have) - "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*")])])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"markbind-table table table-bordered table-striped"},[_c('thead',[_c('tr',[_c('th',[_v("Priority")]),_v(" "),_c('th',[_v("As a …​")]),_v(" "),_c('th',[_v("I want to …​")]),_v(" "),_c('th',[_v("So that I can…​")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* * *")])]),_v(" "),_c('td',[_v("new user")]),_v(" "),_c('td',[_v("view the user guide easily")]),_v(" "),_c('td',[_v("learn more about the app as and when I need")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* * *")])]),_v(" "),_c('td',[_v("new user")]),_v(" "),_c('td',[_v("use a command to exit the program")]),_v(" "),_c('td',[_v("close the application without moving my mouse")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* * *")])]),_v(" "),_c('td',[_v("new user")]),_v(" "),_c('td',[_v("add new contacts")]),_v(" "),_c('td',[_v("save their contact details")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* * *")])]),_v(" "),_c('td',[_v("new user")]),_v(" "),_c('td',[_v("tag new contacts as 'supplier', 'customer' or 'employees'")]),_v(" "),_c('td',[_v("keep my contacts list organized")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* * *")])]),_v(" "),_c('td',[_v("new user")]),_v(" "),_c('td',[_v("view all the contacts that I currently have in my address book")]),_v(" "),_c('td')]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* * *")])]),_v(" "),_c('td',[_v("new user")]),_v(" "),_c('td',[_v("delete existing contacts")]),_v(" "),_c('td',[_v("remove any unwanted or experimental contacts")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* * *")])]),_v(" "),_c('td',[_v("new user")]),_v(" "),_c('td',[_v("find specific contact(s) by name")]),_v(" "),_c('td')]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* * *")])]),_v(" "),_c('td',[_v("new user")]),_v(" "),_c('td',[_v("add new reservations")]),_v(" "),_c('td')]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* * *")])]),_v(" "),_c('td',[_v("new user")]),_v(" "),_c('td',[_v("delete existing reservations")]),_v(" "),_c('td')]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* * *")])]),_v(" "),_c('td',[_v("new user")]),_v(" "),_c('td',[_v("archive contacts of employees/suppliers whose contracts have expired")]),_v(" "),_c('td',[_v("declutter my contacts list")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* * *")])]),_v(" "),_c('td',[_v("new user")]),_v(" "),_c('td',[_v("unarchive contacts")]),_v(" "),_c('td',[_v("contact them when the need arises")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* * *")])]),_v(" "),_c('td',[_v("intermediate user")]),_v(" "),_c('td',[_v("edit existing contacts")]),_v(" "),_c('td',[_v("update contacts easily without deleting and recreating a new one")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* * *")])]),_v(" "),_c('td',[_v("intermediate user")]),_v(" "),_c('td',[_v("filter my contacts by specific tag(s)")]),_v(" "),_c('td')]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* * *")])]),_v(" "),_c('td',[_v("clumsy user")]),_v(" "),_c('td',[_v("get a confirmation message when clearing the entire address book")]),_v(" "),_c('td',[_v("avoid accidentally deleting all contacts")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("new user")]),_v(" "),_c('td',[_v("see a helpful message when my command is not formatted correctly")]),_v(" "),_c('td',[_v("figure out how to fix my command")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("new user")]),_v(" "),_c('td',[_v("try out the features with some sample data")]),_v(" "),_c('td',[_v("understand what each feature does")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("new user")]),_v(" "),_c('td',[_v("tag suppliers with the types of food they supply")]),_v(" "),_c('td',[_v("easily find the right supplier for specific ingredients")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("new user")]),_v(" "),_c('td',[_v("tag employees as 'full time' or 'part time'")]),_v(" "),_c('td',[_v("easily find the contacts of part time employees during peak period")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("forgetful user")]),_v(" "),_c('td',[_v("see all commands I entered this session")]),_v(" "),_c('td')]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("clumsy user")]),_v(" "),_c('td',[_v("undo my last command")]),_v(" "),_c('td',[_v("so that I can rectify an erroneous command")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("user with poor eyesight")]),_v(" "),_c('td',[_v("view the contact details in a larger window when I click on a contact")]),_v(" "),_c('td',[_v("more easily see the contact details")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("user with poor eyesight")]),_v(" "),_c('td',[_v("have tags with different colors")]),_v(" "),_c('td',[_v("easily differentiate tags")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("intermediate user")]),_v(" "),_c('td',[_v("sort reservations by date and time")]),_v(" "),_c('td',[_v("plan the seating arrangement and kitchen workload effectively")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("intermediate user")]),_v(" "),_c('td',[_v("toggle between previous commands by pressing up and down arrows")]),_v(" "),_c('td',[_v("save time typing similar commands")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("intermediate user")]),_v(" "),_c('td',[_v("delete multiple contacts in 1 command")]),_v(" "),_c('td',[_v("remove multiple contacts more quickly")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("intermediate user")]),_v(" "),_c('td',[_v("see upcoming reservations/events in a dashboard")]),_v(" "),_c('td',[_v("anticipate and prepare for such events")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("intermediate user")]),_v(" "),_c('td',[_v("add special requests (e.g. dietary restrictions) to reservations")]),_v(" "),_c('td',[_v("provide personalized service to my customers")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("expert user")]),_v(" "),_c('td',[_v("create my own aliases and shortcuts")]),_v(" "),_c('td',[_v("reduce time spent typing commands")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*")])]),_v(" "),_c('td',[_v("clumsy user")]),_v(" "),_c('td',[_v("find contacts that match the keyword partially")]),_v(" "),_c('td',[_v("avoid retyping the command when I make a typo")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*")])]),_v(" "),_c('td',[_v("intermediate user")]),_v(" "),_c('td',[_v("import contacts from other sources")]),_v(" "),_c('td',[_v("quickly populate the app with existing information")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*")])]),_v(" "),_c('td',[_v("intermediate user")]),_v(" "),_c('td',[_v("have autocomplete when typing commands")]),_v(" "),_c('td',[_v("finish typing the command faster")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*")])]),_v(" "),_c('td',[_v("intermediate user")]),_v(" "),_c('td',[_v("automatically create a blank email addressed to a contact when I click on his/her email field")]),_v(" "),_c('td',[_v("email contacts more quickly")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*")])]),_v(" "),_c('td',[_v("expert user")]),_v(" "),_c('td',[_v("access the app from multiple devices")]),_v(" "),_c('td',[_v("manage my contacts and reservations on the go")])])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"use-cases"}},[_v("Use cases"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#use-cases","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("(For all use cases below, the "),_c('strong',[_v("System")]),_v(" is "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("CulinaryContacts")]),_v(" and the "),_c('strong',[_v("Actor")]),_v(" is the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("user")]),_v(", unless specified otherwise)")])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Use case: UC01 - View help")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("MSS")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("User requests to see the help menu.")])]),_v(" "),_c('li',[_c('p',[_v("CulinaryContacts opens up the help window, displaying the command summary.")]),_v(" "),_c('p',[_v("Use case ends.")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Use case: UC02 - Add a person")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("MSS")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("User requests to add a new person.")])]),_v(" "),_c('li',[_c('p',[_v("CulinaryContacts adds the new person to the "),_c('em',[_v("displayed person list")]),_v(".")]),_v(" "),_c('p',[_v("Use case ends.")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Extensions")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_v("1a. The provided field(s) is/are invalid.")]),_v(" "),_c('ul',[_c('li',[_c('p',[_v("1a1. CulinaryContacts shows an error message.")]),_v(" "),_c('p',[_v("Use case resumes from step 1.")])])])]),_v(" "),_c('li',[_c('p',[_v("1b. Compulsory field(s) is/are missing.")]),_v(" "),_c('ul',[_c('li',[_c('p',[_v("1b1. CulinaryContacts shows an error message.")]),_v(" "),_c('p',[_v("Use case resumes from step 1.")])])])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Use case: UC03 - List all persons in contacts list")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("MSS")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("User requests to show all persons in the contacts list.")])]),_v(" "),_c('li',[_c('p',[_v("CulinaryContacts shows all persons in the contacts list.")]),_v(" "),_c('p',[_v("Use case ends.")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Use case: UC04 - Edit a person")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("MSS")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("User requests to "),_c('u',[_v("list all persons in the contacts list (UC03)")]),_v(" or "),_c('u',[_v("list all persons in the archived list (UC09)")]),_v(".")])]),_v(" "),_c('li',[_c('p',[_v("User requests to edit the fields of a specific person in the "),_c('em',[_v("displayed person list")]),_v(".")])]),_v(" "),_c('li',[_c('p',[_v("CulinaryContacts edits the fields of the person.")]),_v(" "),_c('p',[_v("Use case ends.")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Extensions")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_v("1a. The list is empty.")]),_v(" "),_c('p',[_v("Use case ends.")])]),_v(" "),_c('li',[_c('p',[_v("2a. The given index is invalid.")]),_v(" "),_c('ul',[_c('li',[_c('p',[_v("2a1. CulinaryContacts shows an error message.")]),_v(" "),_c('p',[_v("Use case resumes from step 2.")])])])]),_v(" "),_c('li',[_c('p',[_v("2b. The new field value(s) is/are invalid.")]),_v(" "),_c('ul',[_c('li',[_c('p',[_v("2b1. CulinaryContacts shows an error message.")]),_v(" "),_c('p',[_v("Use case resumes from step 2.")])])])]),_v(" "),_c('li',[_c('p',[_v("2c. No fields to edit are provided.")]),_v(" "),_c('ul',[_c('li',[_c('p',[_v("2c1. CulinaryContacts shows an error message.")]),_v(" "),_c('p',[_v("Use case resumes from step 2.")])])])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Use case: UC05 - Find a person")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("MSS")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("User requests to "),_c('u',[_v("list all persons in the contacts list (UC03)")]),_v(" or "),_c('u',[_v("list all persons in the archived list (UC09)")]),_v(".")])]),_v(" "),_c('li',[_c('p',[_v("User requests to find all persons in the "),_c('em',[_v("displayed person list")]),_v(" with names matching the input keyword(s).")])]),_v(" "),_c('li',[_c('p',[_v("CulinaryContacts shows all persons in the "),_c('em',[_v("displayed person list")]),_v(" with matching names.")]),_v(" "),_c('p',[_v("Use case ends.")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Extensions")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_v("1a. No keywords are provided.")]),_v(" "),_c('ul',[_c('li',[_c('p',[_v("1a1. CulinaryContacts shows an error message.")]),_v(" "),_c('p',[_v("Use case resumes from step 1.")])])])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Use case: UC06 - Filter persons by tag")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("MSS")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("User requests to "),_c('u',[_v("list all persons in the contacts list (UC03)")]),_v(" or "),_c('u',[_v("list all persons in the archived list (UC09)")]),_v(".")])]),_v(" "),_c('li',[_c('p',[_v("User requests to find all persons in the "),_c('em',[_v("displayed person list")]),_v(" with specific tag(s).")])]),_v(" "),_c('li',[_c('p',[_v("CulinaryContacts shows all persons in the "),_c('em',[_v("displayed person list")]),_v(" matching all tags entered.")]),_v(" "),_c('p',[_v("Use case ends.")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Extensions")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_v("1a. No tags are provided.")]),_v(" "),_c('ul',[_c('li',[_c('p',[_v("1a1. CulinaryContacts shows an error message.")]),_v(" "),_c('p',[_v("Use case resumes from step 1.")])])])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Use case: UC07 - Delete a person")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("MSS")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("User requests to "),_c('u',[_v("list all persons in the contacts list (UC03)")]),_v(" or "),_c('u',[_v("list all persons in the archived list (UC09)")]),_v(".")])]),_v(" "),_c('li',[_c('p',[_v("User requests to delete a specific person in the "),_c('em',[_v("displayed person list")]),_v(".")])]),_v(" "),_c('li',[_c('p',[_v("CulinaryContacts deletes the person.")]),_v(" "),_c('p',[_v("Use case ends.")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Extensions")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_v("1a. The "),_c('em',[_v("displayed person list")]),_v(" is empty.")]),_v(" "),_c('p',[_v("Use case ends.")])]),_v(" "),_c('li',[_c('p',[_v("2a. The given index is invalid.")]),_v(" "),_c('ul',[_c('li',[_c('p',[_v("2a1. CulinaryContacts shows an error message.")]),_v(" "),_c('p',[_v("Use case resumes from step 2.")])])])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Use case: UC08 - Clear all entries")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("MSS")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("User requests to clear all entries.")])]),_v(" "),_c('li',[_c('p',[_v("CulinaryContacts asks for confirmation to clear all entries.")])]),_v(" "),_c('li',[_c('p',[_v("User confirms to clear all entries.")])]),_v(" "),_c('li',[_c('p',[_v("CulinaryContacts clears all entries.")]),_v(" "),_c('p',[_v("Use case ends.")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Extensions")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_v("2a. Confirmation is not given.")]),_v(" "),_c('ul',[_c('li',[_c('p',[_v("2a1. CulinaryContacts cancels the clear action.")]),_v(" "),_c('p',[_v("Use case ends.")])])])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Use case UC09: List all persons in archived list")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("MSS")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("User requests to show all contacts in the archived list.")])]),_v(" "),_c('li',[_c('p',[_v("CulinaryContacts shows all persons in the archived list.")]),_v(" "),_c('p',[_v("Use case ends.")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Use case UC10: Archive a person")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("MSS")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("User requests to "),_c('u',[_v("list all persons in the contacts list (UC03)")]),_v(".")])]),_v(" "),_c('li',[_c('p',[_v("User requests to archive a specific person in the contacts list.")])]),_v(" "),_c('li',[_c('p',[_v("CulinaryContacts archives the person.")]),_v(" "),_c('p',[_v("Use case ends.")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Extensions")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_v("1a. The list is empty.")]),_v(" "),_c('p',[_v("Use case ends.")])]),_v(" "),_c('li',[_c('p',[_v("2a. The given index is invalid.")]),_v(" "),_c('ul',[_c('li',[_c('p',[_v("2a1. CulinaryContacts shows an error message.")]),_v(" "),_c('p',[_v("Use case resumes at step 2.")])])])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Use case: UC11 - Unarchive a person")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("MSS")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("User requests to "),_c('u',[_v("list all persons in archived list (UC09)")]),_v(".")])]),_v(" "),_c('li',[_c('p',[_v("User requests to unarchive a specific person in the archived list.")])]),_v(" "),_c('li',[_c('p',[_v("CulinaryContacts unarchives the person.")]),_v(" "),_c('p',[_v("Use case ends.")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Extensions")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_v("1a. The list is empty.")]),_v(" "),_c('p',[_v("Use case ends.")])]),_v(" "),_c('li',[_c('p',[_v("2a. The given index is invalid.")]),_v(" "),_c('ul',[_c('li',[_c('p',[_v("2a1. CulinaryContacts shows an error message.")]),_v(" "),_c('p',[_v("Use case resumes at step 2.")])])])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Use case UC12: Add a reservation")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("MSS")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("User requests to add a new reservation for a person.")])]),_v(" "),_c('li',[_c('p',[_v("CulinaryContacts adds the new reservation to the reservations list.")]),_v(" "),_c('p',[_v("Use case ends.")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Extensions")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_v("1a. The provided field(s) is/are invalid.")]),_v(" "),_c('ul',[_c('li',[_c('p',[_v("1a1. CulinaryContacts shows an error message.")]),_v(" "),_c('p',[_v("Use case resumes from step 1.")])])])]),_v(" "),_c('li',[_c('p',[_v("1b. Compulsory field(s) is/are missing.")]),_v(" "),_c('ul',[_c('li',[_c('p',[_v("1b1. CulinaryContacts shows an error message.")]),_v(" "),_c('p',[_v("Use case resumes from step 1.")])])])]),_v(" "),_c('li',[_c('p',[_v("1c. Another reservation made by the same person, on the same date, and at the same time already exists in the reservations list.")]),_v(" "),_c('ul',[_c('li',[_c('p',[_v("1c1. CulinaryContacts shows an error message.")]),_v(" "),_c('p',[_v("Use case resumes from step 1.")])])])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Use case UC13: Delete a reservation")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("MSS")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("User requests to delete a specific reservation in the reservations list.")])]),_v(" "),_c('li',[_c('p',[_v("CulinaryContacts deletes the reservation.")]),_v(" "),_c('p',[_v("Use case ends.")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Extensions")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_v("1a. The reservations list is empty.")]),_v(" "),_c('p',[_v("Use case ends.")])]),_v(" "),_c('li',[_c('p',[_v("2a. The given index is invalid.")]),_v(" "),_c('ul',[_c('li',[_c('p',[_v("2a1. CulinaryContacts shows an error message.")]),_v(" "),_c('p',[_v("Use case resumes from step 2.")])])])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Use case UC14: Sort reservations")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("MSS")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("User requests to sort all reservations.")])]),_v(" "),_c('li',[_c('p',[_v("CulinaryContacts shows a sorted list of all reservations.")]),_v(" "),_c('p',[_v("Use case ends.")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Use case UC15: Exit program")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("MSS")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("User requests to exit the program.")])]),_v(" "),_c('li',[_c('p',[_v("CulinaryContacts exits.")]),_v(" "),_c('p',[_v("Use case ends")])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"non-functional-requirements"}},[_v("Non-Functional Requirements"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#non-functional-requirements","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("Should work on any "),_c('em',[_v("mainstream OS")]),_v(" as long as it has Java "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("11")]),_v(" or above installed.")]),_v(" "),_c('li',[_v("Should be able to hold up to 1000 persons while ensuring that commands can be executed within two seconds.")]),_v(" "),_c('li',[_v("A user with above average typing speed (40 wpm) for regular English text (i.e., not code, not system admin commands) should be able to accomplish most tasks faster using commands than using the mouse.")]),_v(" "),_c('li',[_v("New users should be able to perform basic operations (add, edit, list, delete contacts) with some guidance from the help documentation.")]),_v(" "),_c('li',[_v("The product is not required to handle financial or inventory aspects of managing a restaurant.")]),_v(" "),_c('li',[_v("All text must be at least font size 12 to ensure readability.")]),_v(" "),_c('li',[_v("User guides and developer guides should be updated with each release.")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"glossary"}},[_v("Glossary"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#glossary","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('strong',[_v("Mainstream OS")]),_v(": Windows, Linux, Unix, MacOS")]),_v(" "),_c('li',[_c('strong',[_v("API (Application Programming Interface)")]),_v(": An API is a set of rules and tools that enables different software applications to communicate and interact with each other.")]),_v(" "),_c('li',[_c('strong',[_v("displayed person list")]),_v(": This refers to the contacts or archived list of persons that you are currently viewing.")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"appendix-instructions-for-manual-testing"}},[_c('strong',[_v("Appendix: Instructions for manual testing")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#appendix-instructions-for-manual-testing","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"launch-and-shutdown"}},[_v("Launch and shutdown"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#launch-and-shutdown","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Initial launch")]),_v(" "),_c('p',[_v("a. Download the jar file and copy into an empty folder.")]),_v(" "),_c('p',[_v("b. Double-click the jar file."),_c('br'),_v("\nExpected: Shows the GUI with a set of sample contacts. The window size may not be optimal.")])]),_v(" "),_c('li',[_c('p',[_v("Saving window preferences")]),_v(" "),_c('p',[_v("a. Resize the window to an optimal size. Move the window to a different location. Close the window.")]),_v(" "),_c('p',[_v("b. Re-launch the app by double-clicking the jar file."),_c('br'),_v("\nExpected: The most recent window size and location is retained.")])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"listing-all-persons-in-contacts-list"}},[_v("Listing all persons in contacts list"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#listing-all-persons-in-contacts-list","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Viewing the contacts list")]),_v(" "),_c('p',[_v("a. Prerequisites: None")]),_v(" "),_c('p',[_v("b. Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_c('br'),_v("\nExpected: The contacts list is shown. The ‘contacts’ tab is underlined indicating that it is the current active tab.")])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"listing-all-persons-in-archived-list"}},[_v("Listing all persons in archived list"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#listing-all-persons-in-archived-list","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Viewing the archived list")]),_v(" "),_c('p',[_v("a. Prerequisites: None")]),_v(" "),_c('p',[_v("b. Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("alist")]),_c('br'),_v("\nExpected: The archived list is shown. The ‘archived’ tab is underlined indicating that it is the current active tab.")])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"clearing-all-entries"}},[_v("Clearing all entries"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#clearing-all-entries","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Removing all persons and reservations from CulinaryContacts.")]),_v(" "),_c('p',[_v("a. Prerequisites: None")]),_v(" "),_c('p',[_v("b. Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clear")]),_v(", followed by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("n")]),_v(" or any other input."),_c('br'),_v("\nExpected: All persons and reservations remain unchanged. A "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Clear cancelled!")]),_v(" message will be shown in the result display.")]),_v(" "),_c('p',[_v("c. Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clear")]),_v(", followed by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("y")]),_v("."),_c('br'),_v("\nExpected: All persons and reservations will be deleted. A "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Clear successful!")]),_v(" message will be shown in the result display.")])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"viewing-help"}},[_v("Viewing help"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#viewing-help","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Opening the help window to view the command summary")]),_v(" "),_c('p',[_v("a. Prerequisites: The help window is not open.")]),_v(" "),_c('p',[_v("b. Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help")]),_c('br'),_v("\nExpected: The help window is opened.")]),_v(" "),_c('p',[_v("c. Test case: Press "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("F1")]),_c('br'),_v("\nExpected: The help window is opened.")]),_v(" "),_c('p',[_v("d. Test case: Click "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Help")]),_v(" button at the top, then click "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Help F1")]),_v(" button in the drop-down menu."),_c('br'),_v("\nExpected: The help window is opened.")])]),_v(" "),_c('li',[_c('p',[_v("Copying the user guide website address")]),_v(" "),_c('p',[_v("a. Prerequisites: The help window is opened.")]),_v(" "),_c('p',[_v("b. Test case: Click on the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Copy URL")]),_v(" button, then paste it in the address bar of an external web browser."),_c('br'),_v("\nExpected: The website address is copied to clipboard and the website is accessible.")])]),_v(" "),_c('li',[_c('p',[_v("Closing the help window")]),_v(" "),_c('p',[_v("a. Prerequisites: The help window is opened.")]),_v(" "),_c('p',[_v("b. Test case: Press "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("q")]),_c('br'),_v("\nExpected: The help window is closed.")]),_v(" "),_c('p',[_v("c. Test case: Click the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("X")]),_v(" button on top right corner of the help window."),_c('br'),_v("\nExpected: The help window is closed.")])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"archiving-a-person"}},[_v("Archiving a person"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#archiving-a-person","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Archiving a person while viewing the contacts list")]),_v(" "),_c('p',[_v("a. Prerequisites: The user is viewing the contacts list. There is at least 1 person in the contacts list.")]),_v(" "),_c('p',[_v("b. Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("archive 1")]),_v(", followed by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("alist")]),_c('br'),_v("\nExpected: The archived person is removed from the contacts list. This archived contact can be seen by executing the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("alist")]),_v(" command to view the archived list. Details of the archived contact are shown in the status message.")]),_v(" "),_c('p',[_v("c. Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("archive 0")]),_c('br'),_v("\nExpected: No person is archived. Result display shows error message: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Invalid command format!")]),_v(".")]),_v(" "),_c('p',[_v("d. Other incorrect delete commands to try: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("archive")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("archive x")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("...")]),_v(" (where x is larger than list size)"),_c('br'),_v("\nExpected: Similar to previous.")])]),_v(" "),_c('li',[_c('p',[_v("Archiving a person while viewing the archived list")]),_v(" "),_c('p',[_v("a. Prerequisites: The user is viewing the archived list. There is at least 1 person in the archived list.")]),_v(" "),_c('p',[_v("b. Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("archive 1")]),_c('br'),_v("\nExpected: Result display shows error message: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("This command can only be used while viewing the active contacts list")]),_v(". No person is archived.")])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"unarchiving-a-person"}},[_v("Unarchiving a person"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#unarchiving-a-person","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Unarchiving a person while viewing the archived list")]),_v(" "),_c('p',[_v("a. Prerequisites: List all archived persons using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("alist")]),_v(" command. There is at least 1 person in the archived list.")]),_v(" "),_c('p',[_v("b. Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("unarchive 1")]),_v(", followed by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_c('br'),_v("\nExpected: First contact is removed from the archived list. This unarchived contact can be seen by executing the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_v(" command to view the contacts list. Details of the unarchived contact are shown in the status message.")]),_v(" "),_c('p',[_v("c. Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("unarchive 0")]),_c('br'),_v("\nExpected: No person is unarchived. Result display shows error message: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Invalid command format!")]),_v(".")]),_v(" "),_c('p',[_v("d. Other incorrect delete commands to try: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("unarchive")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("unarchive x")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("...")]),_v(" (where x is larger than list size)"),_c('br'),_v("\nExpected: Similar to previous.")])]),_v(" "),_c('li',[_c('p',[_v("Unarchiving a person while viewing the contacts list")]),_v(" "),_c('p',[_v("a. Prerequisites: The user is viewing the contacts list. There is at least 1 person in the contacts list.")]),_v(" "),_c('p',[_v("b. Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("unarchive 1")]),_c('br'),_v("\nExpected: Result display shows error message: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("This command can only be used while viewing the archived list")]),_v(". No person is unarchived.")])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"adding-a-new-reservation"}},[_v("Adding a new reservation"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#adding-a-new-reservation","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Adding a new reservation for the first person in the "),_c('em',[_v("displayed person list")]),_v(".")]),_v(" "),_c('p',[_v("a. Prerequisites: There is at least 1 person in the "),_c('em',[_v("displayed person list")]),_v(". There are no existing reservations made by the first person on 17/04/2024 at 6.00pm.")]),_v(" "),_c('p',[_v("b. Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("rsv 1 d/2024-04-17 t/1800 p/8")]),_c('br'),_v("\nExpected: A new reservation is added to the reservations list. Name and phone number of the person, as well as date, time and number of people will be displayed in the reservation card.")])]),_v(" "),_c('li',[_c('p',[_v("Adding a duplicate reservation with the same date and time")]),_v(" "),_c('p',[_v("a. Prerequisites: There is at least 1 person in the "),_c('em',[_v("displayed person list")]),_v(". There is an existing reservation made by the first person on 17/04/2024 at 6.00pm.")]),_v(" "),_c('p',[_v("b. Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("rsv 1 d/2024-04-17 t/1800")]),_v(" p/5"),_c('br'),_v("\nExpected: Result display shows error message: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("This person has already made a reservation at this date and timing in the address book")]),_v(". No new reservation is added to the reservations list.")])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"deleting-a-new-reservation"}},[_v("Deleting a new reservation"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#deleting-a-new-reservation","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Deleting the first reservation in the reservations list")]),_v(" "),_c('p',[_v("a. Prerequisites: There is at least 1 reservation in the reservations list.")]),_v(" "),_c('p',[_v("b. Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("rsvdel 1")]),_c('br'),_v("\nExpected: First reservation is deleted from the reservations list. Details of the reservation shown in the result display.")]),_v(" "),_c('p',[_v("c. Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("rsvdel 1000")]),_c('br'),_v("\nExpected: Result display shows error message: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("The reservation index provided is invalid")]),_v(". No reservation is deleted from the reservations list.")])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"sorting-reservations"}},[_v("Sorting reservations"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#sorting-reservations","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Sorting all reservations")]),_v(" "),_c('p',[_v("a. Prerequisites: Multiple reservations in the reservations list. There is at least 1 non-expired reservation and 1 expired reservation in the reservations list. There is at least 1 person in the "),_c('em',[_v("displayed person list")]),_v(".")]),_v(" "),_c('p',[_v("b. Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("rsv 1 d/2024-09-25 t/1800 p/4")]),_v(", followed by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("rsvsort")]),_c('br'),_v("\nExpected: The new reservation is added to the bottom of the reservations list. After the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("rsvsort")]),_v(" command is called, the reservations list is now sorted in the "),_c('a',{attrs:{"href":"/tp/UserGuide.html#sorting-reservations-rsvsort"}},[_v("correct order")]),_v(".")])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"appendix-planned-enhancements"}},[_c('strong',[_v("Appendix: Planned Enhancements")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#appendix-planned-enhancements","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('strong',[_v("Use an ID field as the unique identifier")]),_v(": The current unique identifier is the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("NAME")]),_v(" of the person preventing addition of duplicate names. This is too restrictive as persons with the same name are quite common in reality. The user may also want to only record the first or last name which may cause more duplicate names. We plan to introduce a new "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ID")]),_v(" field as a unique identifier for each contact, which will allow duplicate names to be recorded.")]),_v(" "),_c('li',[_c('strong',[_v("Sync contact updates with reservation")]),_v(": Currently, when a user edits a contact's "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("NAME")]),_v(" or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("PHONE NUMBER")]),_v(" in the contacts list, these changes are not reflected in existing reservations made for that contact. As a result, the reservation records become inconsistent with the updated contact details. We plan to enhance this feature by ensuring that any updates to a contact in the contacts or archived list will automatically update the contact's details in the reservations list. For example, if the contact John Doe's phone number is updated, all existing reservations under John Doe's name will automatically reflect this new phone number.")]),_v(" "),_c('li',[_c('strong',[_v("Cascading reservation deletion")]),_v(": Currently, when a contact is deleted, their existing reservations remain in the address book. However, this process can be cumbersome for users, as they must manually delete each reservation individually. To enhance user-friendliness, we plan to implement cascading deletion, whereby deleting a contact will also remove all associated reservations automatically.")]),_v(" "),_c('li',[_c('strong',[_v("Less compulsory fields for add command")]),_v(": Currently when adding a contact, the user must input the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("NAME")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("PHONE")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("EMAIL")]),_v("and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ADDRESS")]),_v(" of the contact as all these fields are mandatory. This requirement can create difficulties if the user lacks information for all these fields. We plan to make the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("PHONE")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("EMAIL")]),_v("and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ADDRESS")]),_v(" fields optional, so that it is more convenient for the user to add new contacts.")]),_v(" "),_c('li',[_c('strong',[_v("Make ‘invalid index’ error messages cover cases where "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("INDEX")]),_v(" is less than 1 or greater than 2147483647")]),_v(": The current error message which shows when the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("INDEX")]),_v(" is less than 1 and exceeds the maximum integer size is ‘Invalid command format’, which might not be clear for the user. We plan to show the error message "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("The person index provided is invalid")]),_v(" for these cases.")])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("["),_c('span',[_c('strong',[_v("Powered by")])]),_v(" "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"30"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.6.0")]),_v(", generated on Thu, 15 May 2025, 17:05:54 GMT+8]")])])])}
}];
  