import {
  Star,
  MoreHorizontal,
  FileText,
  ImageIcon,
  MapPin,
  Calendar,
  ArrowUpDown,
  Phone,
  Bookmark,
  EyeOff,
  Flag,
  ChevronRight,
  AlertCircle,
  MoreVertical,
  ChevronsLeft,
  ChevronLeft,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function ServiceListing() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white px-4 py-3 flex items-center justify-between border-b border-gray-100">
        <div className="flex items-center gap-3">
          <Avatar className="w-8 h-8">
            <AvatarImage src="/oglogo.png" />
            <AvatarFallback className="bg-orange-500 text-white text-sm">EC</AvatarFallback>
          </Avatar>
          <span className="text-lg font-semibold text-gray-500">EmptyCup</span>

        </div>
        <Button variant="ghost" size="icon" className="w-8 h-8">
          <MoreVertical className="w-5 h-5 text-black-700" />
        </Button>
      </div>

      {/* Navigation */}
      <div className="bg-white px-4 py-3 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-center gap-1">
            <FileText className="w-5 h-5 text-orange-500" />
            <span className="text-xs text-orange-500 font-medium">Contacts</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <ImageIcon className="w-5 h-5 text-black" />
            <span className="text-xs text-gray-700">Gallery</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <MapPin className="w-5 h-5 text-gray-400" />
            <span className="text-xs text-gray-400">Map</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Calendar className="w-5 h-5 text-black" />
            <span className="text-xs text-gray-700">Shortlisted</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <ArrowUpDown className="w-5 h-5 text-black" />
            <span className="text-xs text-gray-400" >Sort</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-4">
        {/* Epic Designs Card */}
        <Card
            className="shadow-sm border border-gray-100"
            style={{ backgroundColor: '#FFFCF2' }}
          >

          <CardContent className="p-4">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Epic Designs</h3>
                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-4 h-4 fill-black text-black" />
                  <Star className="w-4 h-4 fill-black text-black" />
                  <Star className="w-4 h-4 fill-black text-black" />

                  {/* Half-filled star */}
                  <div className="relative w-4 h-4">
                    <Star
                      className="absolute w-4 h-4 fill-black text-black"
                      style={{ clipPath: "inset(0 50% 0 0)" }}
                    />
                    <Star className="w-4 h-4 fill-gray-200 text-gray-200" />
                  </div>

                  <Star className="w-4 h-4 fill-gray-200 text-gray-200" />
                </div>
              </div>
              <Button variant="ghost" size="sm" className="text-orange-500 text-sm font-medium p-0 h-auto flex flex-col items-center">
              <ChevronLeft className="w-4 h-4" />
              <span>Details</span>
            </Button>

            </div>

            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              Passionate team of 4 designers working out of Bangalore with an experience of 8 years.
            </p>

            <div className="flex items-center justify-between mb-4">
              <div className="text-center">
                <div className="text-xl font-bold text-gray-900">57</div>
                <div className="text-xs text-gray-500">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-gray-900">8</div>
                <div className="text-xs text-gray-500">Years</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-gray-900">$$</div>
                <div className="text-xs text-gray-500">Price</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Bookmark className="w-5 h-5 text-orange-400" />
                <span className="text-xs text-orange-500">Shortlist</span>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-900">+91 - 984532853</span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-8 h-12 flex flex-col items-center justify-center p-0"
                >
                  <EyeOff className="w-4 h-4 text-orange-500" />
                  <span className="text-xs text-orange-500 mt-1">Hide</span>
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-900">+91 - 984532854</span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-8 h-12 flex flex-col items-center justify-center p-0"
                >
                  <Phone className="w-4 h-4 text-orange-500" />
                  <span className="text-xs text-orange-500 mt-1">Call</span>
                </Button>
              </div>
            </div>

            <div className="flex justify-end">
              <Button
                variant="ghost"
                size="icon"
                className="w-8 h-12 flex flex-col items-center justify-center p-0"
              >
                <AlertCircle className="w-4 h-4 text-orange-400" />
                <span className="text-xs text-orange-400 mt-1">Report</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Studio - D3 Card */}
        <Card className="bg-white shadow-sm border border-gray-100">
          <CardContent className="p-4">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Studio - D3</h3>
                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-4 h-4 fill-black text-black" />
                  <Star className="w-4 h-4 fill-black text-black" />
                  <Star className="w-4 h-4 fill-black text-black" />
                  <Star className="w-4 h-4 fill-black text-black" />

                  {/* Half-filled black star */}
                  <div className="relative w-4 h-4">
                    <Star
                      className="absolute w-4 h-4 fill-black text-black"
                      style={{ clipPath: "inset(0 50% 0 0)" }}
                    />
                    <Star className="w-4 h-4 fill-gray-200 text-gray-200" />
                  </div>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="text-orange-500 text-sm font-medium p-0 h-auto flex flex-col items-center">
              <ChevronLeft className="w-4 h-4" />
              <span>Details</span>
            </Button>
            </div>

            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              Passionate team of 4 designers working out of Bangalore with an experience of 6 years.
            </p>

            <div className="flex items-center justify-between mb-4">
              <div className="text-center">
                <div className="text-xl font-bold text-gray-900">43</div>
                <div className="text-xs text-gray-500">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-gray-900">6</div>
                <div className="text-xs text-gray-500">Years</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-gray-900">$$$</div>
                <div className="text-xs text-gray-500">Price</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Bookmark className="w-5 h-5 text-orange-400" />
                <span className="text-xs text-orange-500">Shortlist</span>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-900">+91 - 984532854</span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-8 h-12 flex flex-col items-center justify-center p-0"
                >
                  <EyeOff className="w-4 h-4 text-orange-500" />
                  <span className="text-xs text-orange-500 mt-1">Hide</span>
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-900">+91 - 984532855</span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-8 h-12 flex flex-col items-center justify-center p-0"
                >
                  <Phone className="w-4 h-4 text-orange-500" />
                  <span className="text-xs text-orange-500 mt-1">Call</span>
                </Button>
              </div>
            </div>

            <div className="flex justify-end">
              <Button
                variant="ghost"
                size="icon"
                className="w-8 h-12 flex flex-col items-center justify-center p-0"
              >
                <AlertCircle className="w-4 h-4 text-orange-400" />
                <span className="text-xs text-orange-400 mt-1">Report</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
