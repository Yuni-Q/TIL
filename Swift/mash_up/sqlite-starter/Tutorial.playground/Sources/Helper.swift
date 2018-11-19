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
import PlaygroundSupport

let tutorialDirectoryUrl = playgroundSharedDataDirectory.appendingPathComponent("SQLiteTutorial").resolvingSymlinksInPath

private enum Database: String {
  case Part1
  case Part2
  
  var path: String {
    return tutorialDirectoryUrl().appendingPathComponent("\(self.rawValue).sqlite").relativePath
  }
}

public let part1DbPath = Database.Part1.path
public let part2DbPath = Database.Part2.path

private func destroyDatabase(db: Database) {
  do {
    if FileManager.default.fileExists(atPath: db.path) {
      try FileManager.default.removeItem(atPath: db.path)
    }
  } catch {
    print("Could not destroy \(db) Database file.")
  }
}

public func destroyPart1Database() {
  destroyDatabase(db: .Part1)
}

public func destroyPart2Database() {
  destroyDatabase(db: .Part2)
}
