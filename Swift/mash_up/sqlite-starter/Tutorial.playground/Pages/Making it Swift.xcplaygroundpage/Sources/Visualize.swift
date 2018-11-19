/// Copyright (c) 2017 Razeware LLC
///
/// Permission is hereby granted, free of charge, to any person obtaining a copy
/// of this software and associated documentation files (the "Software"), to deal
/// in the Software without restriction, including without limitation the rights
/// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
/// copies of the Software, and to permit persons to whom the Software is
/// furnished to do so, subject to the following conditions:
///
/// The above copyright notice and this permission notice shall be included in
/// all copies or substantial portions of the Software.
///
/// Notwithstanding the foregoing, you may not use, copy, modify, merge, publish,
/// distribute, sublicense, create a derivative work, and/or sell copies of the
/// Software in any work that is designed, intended, or marketed for pedagogical or
/// instructional purposes related to programming, coding, application development,
/// or information technology.  Permission for such use, copying, modification,
/// merger, publication, distribution, sublicensing, creation of derivative works,
/// or sale is expressly withheld.
///
/// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
/// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
/// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
/// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
/// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
/// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
/// THE SOFTWARE.

import Foundation
import UIKit

func columnView(name: String, useHeaderStyle: Bool = false) -> UIView {
  let label = UILabel(frame: CGRect(x: 0, y: 0, width: 1, height: 1))
  label.text = " \(name)"
  label.sizeToFit()
  if useHeaderStyle {
    label.backgroundColor = UIColor.lightGray
  }
  
  label.layer.borderWidth = 0.5
  label.layer.borderColor = UIColor.black.cgColor
  label.sizeToFit()
  
  return label
}

public func rowView(row: Row, useHeaderStyle: Bool = false) -> UIView {
  let stackView = UIStackView(frame: CGRect(x: 0, y: 0, width: 1, height: 1))
  stackView.axis = .horizontal
  stackView.distribution = .fillEqually
  stackView.spacing = 0
  
  var columnViews = [UIView]()
  for name in row.names {
    let c = columnView(name: name, useHeaderStyle: useHeaderStyle)
    columnViews.append(c)
    stackView.addArrangedSubview(c)
  }
  
  stackView.frame = CGRect(x: 0, y: 0, width: row.names.count*100, height: 30)
  
  return stackView
}

public struct Row {
  let names: [String]
  
  public init(names: [String]) {
    self.names = names
  }
}

public func tableView(rows: [Row]) -> UIView {
  guard rows.count > 0 else {
    return columnView(name: "No Rows")
  }
  
  let firstRow = rows[0]
  
  let stackView = UIStackView(frame: CGRect(x: 0, y: 0, width: 1, height: 1))
  stackView.axis = .vertical
  stackView.distribution = .fillEqually
  stackView.spacing = 0
  
  for row in rows {
    let isHeaderRow = stackView.arrangedSubviews.count == 0
    stackView.addArrangedSubview(rowView(row: row, useHeaderStyle: isHeaderRow))
  }
  
  stackView.frame = CGRect(x: 0, y: 0, width: firstRow.names.count * 100, height: rows.count * 25)
  
  return stackView
}

public struct Contact: CustomDebugStringConvertible {
  public let id: Int32
  public let name: String
  
  public init(id: Int32, name: String) {
    self.id = id
    self.name = name
  }
  
  public var debugDescription: String {
    return "\(id) | \(name)"
  }
}

public protocol TableRecord {
  var headerRow: Row { get }
  var dataRow: Row { get }
  
}

public extension TableRecord {
  func visualize() -> UIView {
    return tableView(rows: [headerRow, dataRow])
  }
}


extension Contact: TableRecord {
  public var headerRow: Row {
    return Row(names: ["Id", "Name"])
  }
  
  public var dataRow: Row {
    return Row(names: [String(id), name])
  }
}

public extension Array where Element: TableRecord {
  public func visualize() -> UIView? {
    guard count > 0 else {
      return nil
    }
    
    let firstItem = self[0]
    var rows = [firstItem.headerRow]
    for item in self {
      rows.append(item.dataRow)
    }
    
    return tableView(rows: rows)
  }
}



