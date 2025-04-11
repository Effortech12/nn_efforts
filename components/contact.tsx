"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin, Send } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-8 bg-gradient-to-b from-background/95 to-background">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-2">Get in Touch</h2>
          <p className="max-w-[42rem] text-muted-foreground text-sm">
            Contact us to learn how Effortech can help your financial institution manage technology risks effectively
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-5">
          <Card className="bg-background/50 border-purple-900/20 lg:col-span-3">
            <CardHeader className="pb-2 space-y-1">
              <CardTitle className="text-lg flex items-center gap-2">
                <Send className="h-4 w-4 text-purple-400" />
                Send us a message
              </CardTitle>
              <CardDescription className="text-xs">
                Fill out the form below and our team will get back to you shortly
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form
                className="grid gap-3"
                onSubmit={(e) => {
                  e.preventDefault()
                  // You would typically handle form submission here
                  alert("Message sent! We'll get back to you soon.")
                }}
              >
                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <Input placeholder="Full Name" className="text-sm h-9" />
                  </div>
                  <div>
                    <Input placeholder="Email" type="email" className="text-sm h-9" />
                  </div>
                </div>
                <div>
                  <Input placeholder="Organization" className="text-sm h-9" />
                </div>
                <div>
                  <Textarea placeholder="Your Message" className="min-h-[80px] text-sm resize-none" />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-4 lg:col-span-2">
            <Card className="bg-background/50 border-cyan-900/20 h-full">
              <CardContent className="p-4 flex flex-col justify-between h-full gap-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-cyan-900/20 p-2">
                    <Mail className="h-4 w-4 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm">Email Us</h3>
                    <p className="text-xs text-muted-foreground mt-1">Our friendly team is here to help</p>
                    <a
                      href="mailto:info@effor.tech"
                      className="text-xs text-cyan-400 hover:underline mt-1 inline-block"
                    >
                      info@effor.tech
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-purple-900/20 p-2">
                    <MapPin className="h-4 w-4 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm">Visit Us</h3>
                    <p className="text-xs text-muted-foreground mt-1">Come say hello at our offices</p>

                    <div className="mt-1">
                      <p className="text-xs font-medium">Bangalore</p>
                      <p className="text-xs text-muted-foreground">
                        #104, C Block, 2 Arcadia, Krupanidhi College Road, Bengaluru, Karnataka 560035
                      </p>
                    </div>

                    <div className="mt-2">
                      <p className="text-xs font-medium">Noida</p>
                      <p className="text-xs text-muted-foreground">
                        5th Floor, Lets, Connect Business Park, A-57, Sector 136, Noida, Uttar Pradesh 201301
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-auto">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7007270342097!2d77.6219!3d12.9244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU1JzI3LjgiTiA3N8KwMzcnMTguOCJF!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
                    width="100%"
                    height="150"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg mt-2"
                    title="Effortech Office Location"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
