export enum Anchor {
  bottom,
  centerX,
  centerY,
  firstBaseline,
  height,
  lastBaseline,
  leading,
  left,
  right,
  top,
  trailing,
  width
}

export enum Relation {
  '=' = NSLayoutConstraint.Relation.Equal,
  '>=' = NSLayoutConstraint.Relation.GreaterThanOrEqual,
  '<=' = NSLayoutConstraint.Relation.LessThanOrEqual
}

// https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/AutolayoutPG/AnatomyofaConstraint.html
//
// RedView.Leading = 1.0 x BlueView.trailing + 8.0
// ^       ^       ^ ^     ^        ^          ^
// |       |       | |     |        |          constant
// |       |       | |     |        secondAnchor
// |       |       | |     secondItem
// |       |       | multiplier
// |       |       relationship
// |       firstAnchor
// firstItem

export type DefinitionEntry = {
  relationship?: keyof typeof Relation,
  multiplier?: number,
  secondItem?: string,
  secondAnchor?: keyof typeof Anchor,
  constant?: number,
  priority?: number
}

export type Definition = { [key in keyof typeof Anchor]?: DefinitionEntry }
export type Definitions = { [key in string]: Definition }

// export type DirectiveValue = {
//   multiplier?: number
//   constant?: number
//   priority?: number
// }
