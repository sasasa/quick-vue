import { createApp } from 'vue'
import router from './router'
import { createPinia } from 'pinia'

import App from './App.vue'

// Part 3
import FirstApp from './components/p03/FirstApp.vue'
import ReactiveVar from './components/p03/ReactiveVar.vue'
import ReactiveMulti from './components/p03/ReactiveMulti.vue'
import ComputeBad from './components/p03/ComputeBad.vue'
import ComputeGood from './components/p03/ComputeGood.vue'
import MethodBasic from './components/p03/MethodBasic.vue'
import MethodCompute from './components/p03/MethodCompute.vue'

// Part 4
import TextBasic from './components/p04/TextBasic.vue'
import PreBasic from './components/p04/PreBasic.vue'
import HtmlBasic from './components/p04/HtmlBasic.vue'
import BindBasic from './components/p04/BindBasic.vue'
import BindObject from './components/p04/BindObject.vue'
import BindDynamic from './components/p04/BindDynamic.vue'
import OnceBasic from './components/p04/OnceBasic.vue'
import StyleBasic from './components/p04/StyleBasic.vue'
import StyleMulti from './components/p04/StyleMulti.vue'
import StylePrefix from './components/p04/StylePrefix.vue'
import ClassBasic from './components/p04/ClassBasic.vue'
import ClassString from './components/p04/ClassString.vue'
import ClassMulti from './components/p04/ClassMulti.vue'
import CloakBasic from './components/p04/CloakBasic.vue'

// Part 5
import EventBasic from './components/p05/EventBasic.vue'
import EventObject from './components/p05/EventObject.vue'
import EventArgs from './components/p05/EventArgs.vue'
import EventArgs2 from './components/p05/EventArgs2.vue'
import EventOnce from './components/p05/EventOnce.vue'
import EventKey from './components/p05/EventKey.vue'
import EventSys from './components/p05/EventSys.vue'
import EventMouse from './components/p05/EventMouse.vue'

// Part 6
import ModelBasic from './components/p06/ModelBasic.vue'
import ModelRadio from './components/p06/ModelRadio.vue'
import ModelCheck from './components/p06/ModelCheck.vue'
import ModelCheckMulti from './components/p06/ModelCheckMulti.vue'
import ModelSelect from './components/p06/ModelSelect.vue'
import ModelSelectMulti from './components/p06/ModelSelectMulti.vue'
import ModelObject from './components/p06/ModelObject.vue'
import ModelUpload from './components/p06/ModelUpload.vue'
import ModelNumber from './components/p06/ModelNumber.vue'
import ModelTrim from './components/p06/ModelTrim.vue'
import ModelLazy from './components/p06/ModelLazy.vue'
import ModelCustom from './components/p06/ModelCustom.vue'

// Part 7
import IfBasic from './components/p07/IfBasic.vue'
import IfElse from './components/p07/IfElse.vue'
import ForBasic from './components/p07/ForBasic.vue'
import ForIndex from './components/p07/ForIndex.vue'
import ForObject from './components/p07/ForObject.vue'
import ForNumber from './components/p07/ForNumber.vue'
import ForFilter from './components/p07/ForFilter.vue'
import ForMulti from './components/p07/ForMulti.vue'

// Part 8
import PropBasic from './components/p08/PropBasic.vue'
import PropInner from './components/p08/PropInner.vue'
import PropAttr from './components/p08/PropAttr.vue'
import MyHello from './components/p08/MyHello.vue'
import EventCustom from './components/p08/EventCustom.vue'
import SlotBasic from './components/p08/SlotBasic.vue'
import SlotMulti from './components/p08/SlotMulti.vue'
import ProvideBasic from './components/p08/ProvideBasic.vue'
import CompositeBasic from './components/p08/CompositeBasic.vue'

// Part 9
import MetaComp from './components/p09/MetaComp.vue'
import EffectList from './components/p09/EffectList.vue'
import TeleportBasic from './components/p09/TeleportBasic.vue'
import SuspenseBasic from './components/p09/SuspenseBasic.vue'

// Part 10
import vHighlight from './directives/vHighlight.js'
import vArgedHighlight from './directives/vArgedHighlight.js'
import vEventHighlight from './directives/vEventHighlight.js'
import MyUtil from './plugins/MyUtil.js'

import DirectiveBasic from './components/p10/DirectiveBasic.vue'
import DirectiveChange from './components/p10/DirectiveChange.vue'
import DirectiveArgs from './components/p10/DirectiveArgs.vue'
import DirectiveEvent from './components/p10/DirectiveEvent.vue'
import PluginBasic from './components/p10/PluginBasic.vue'

// Part 11
import RouteBasic from './components/p11/RouteBasic.vue'

// Part 12
import PiniaBasic from './components/p12/PiniaBasic.vue'
import StoragePlugin from './plugins/StoragePlugin'

// const app = createApp(App)

// Part 3
const app = createApp(FirstApp)
// const app = createApp(ReactiveVar)
// const app = createApp(ReactiveMulti)
// const app = createApp(ComputeBad)
// const app = createApp(ComputeGood)
// const app = createApp(MethodBasic)
// const app = createApp(MethodCompute)

// Part 4
// const app = createApp(TextBasic)
// const app = createApp(PreBasic)
// const app = createApp(HtmlBasic)
// const app = createApp(BindBasic)
// const app = createApp(BindObject)
// const app = createApp(BindDynamic)
// const app = createApp(OnceBasic)
// const app = createApp(StyleBasic)
// const app = createApp(StyleMulti)
// const app = createApp(StylePrefix)
// const app = createApp(ClassBasic)
// const app = createApp(ClassString)
// const app = createApp(ClassMulti)
// const app = createApp(CloakBasic)

// Part 5
// const app = createApp(EventBasic)
// const app = createApp(EventObject)
// const app = createApp(EventArgs)
// const app = createApp(EventArgs2)
// const app = createApp(EventOnce)
// const app = createApp(EventKey)
// const app = createApp(EventSys)
// const app = createApp(EventMouse)

// Part 6
// const app = createApp(ModelBasic)
// const app = createApp(ModelRadio)
// const app = createApp(ModelCheck)
// const app = createApp(ModelCheckMulti)
// const app = createApp(ModelSelect)
// const app = createApp(ModelSelectMulti)
// const app = createApp(ModelObject)
// const app = createApp(ModelUpload)
// const app = createApp(ModelNumber)
// const app = createApp(ModelTrim)
// const app = createApp(ModelLazy)
// const app = createApp(ModelCustom)

// Part 7
// const app = createApp(IfBasic)
// const app = createApp(IfElse)
// const app = createApp(ForBasic)
// const app = createApp(ForIndex)
// const app = createApp(ForObject)
// const app = createApp(ForNumber)
// const app = createApp(ForFilter)
// const app = createApp(ForMulti)

// Part 8
// const app = createApp(PropBasic)
// app.component('MyHello', MyHello)
// const app = createApp(PropInner)
// const app = createApp(PropAttr)
// const app = createApp(MyHello, { name: '鈴木次郎' })
// const app = createApp(EventCustom)
// const app = createApp(SlotBasic)
// const app = createApp(SlotMulti)
// const app = createApp(ProvideBasic)
// const app = createApp(CompositeBasic)

// Part 9
// const app = createApp(MetaComp)
// const app = createApp(EffectList)
// const app = createApp(TeleportBasic)
// const app = createApp(SuspenseBasic)

// Part 10
// const app = createApp(DirectiveBasic)
// const app = createApp(DirectiveChange)
// const app = createApp(DirectiveArgs)
// const app = createApp(DirectiveEvent)
// const app = createApp(PluginBasic)

// Part 11
// const app = createApp(RouteBasic)

// Part 12
// const app = createApp(PiniaBasic)

// Directives
app.directive('highlight', vHighlight)
app.directive('argedHighlight', vArgedHighlight)
app.directive('eventHighlight', vEventHighlight)

// Plugins
app.use(router)
// app.use(createPinia())
const pinia = createPinia()
pinia.use(StoragePlugin)
app.use(pinia)

app.use(MyUtil, { border: true })

app.mount('#app')

